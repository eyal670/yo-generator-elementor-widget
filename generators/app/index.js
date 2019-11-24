/* eslint-disable camelcase */
"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  async prompting() {
    this.log(yosay(`Welcome to ${chalk.red("elementor-widget")} generator!`));
    this.answers = await this.prompt([
      {
        type: "input",
        name: "auth_name",
        message: "Author name:"
      },
      {
        type: "input",
        name: "plugin_name",
        message: "Plugin name:"
      },
      {
        type: "input",
        name: "widget_name",
        message: "Widget name:"
      },
      {
        type: "input",
        name: "plugin_prefix",
        message: "Plugin prefix:"
      }
    ]);
  }

  writing() {
    // Create main plugin php file
    this.fs.copyTpl(
      this.templatePath("pluginName.php"),
      this.destinationPath(
        hyphen_name(this.answers.plugin_name) +
          "/" +
          fileName(hyphen_name(this.answers.plugin_name), "php")
      ),
      {
        auth_name: this.answers.auth_name,
        plugin_name: capitalizeFirstLetter(
          spacing_name(this.answers.plugin_name)
        ),
        plugin_prefix: this.answers.plugin_prefix
      }
    );
    this.fs.copyTpl(
      this.templatePath("modules.php"),
      this.destinationPath(
        hyphen_name(this.answers.plugin_name) + "/modules.php"
      ),
      {
        auth_name: this.answers.auth_name,
        plugin_name: capitalizeFirstLetter(
          spacing_name(this.answers.plugin_name)
        ),
        plugin_prefix: this.answers.plugin_prefix
      }
    );
    // Create css files
    this.fs.copyTpl(
      this.templatePath("assets/css/editor.css"),
      this.destinationPath(
        hyphen_name(this.answers.plugin_name) + "/assets/css/editor.css"
      ),
      {
        auth_name: this.answers.auth_name
      }
    );
    this.fs.copyTpl(
      this.templatePath("assets/css/frontend.css"),
      this.destinationPath(
        hyphen_name(this.answers.plugin_name) + "/assets/css/frontend.css"
      ),
      {
        auth_name: this.answers.auth_name
      }
    );

    // Create js files
    this.fs.copyTpl(
      this.templatePath("assets/js/main.js"),
      this.destinationPath(
        hyphen_name(this.answers.plugin_name) + "/assets/js/main.js"
      ),
      {
        auth_name: this.answers.auth_name
      }
    );

    // Create widget main php file
    this.fs.copyTpl(
      this.templatePath("modules/widgetName/widgets/widget-widgetName.php"),
      this.destinationPath(
        hyphen_name(this.answers.plugin_name) +
          "/modules/" +
          this.answers.widget_name +
          "/widgets/widget-" +
          fileName(hyphen_name(this.answers.plugin_name), "php")
      ),
      {
        auth_name: this.answers.auth_name,
        widget_name: this.answers.widget_name,
        spaced_widget_name: spacing_name(this.answers.widget_name),
        underlined_widget_name: underline_name(this.answers.widget_name),
        hyphen_lower_widget_name: hyphen_name(
          lowerCase(this.answers.widget_name)
        )
      }
    );
  }
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCase(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function spacing_name(str) {
  str = str.replace(/_/g, "-");
  return str.replace(/-/g, " ");
}

function underline_name(str) {
  str = str.replace(/ /g, "-");
  return str.replace(/-/g, "_");
}

function hyphen_name(str) {
  str = str.replace(/_/g, "-");
  return str.replace(/ /g, "-");
}

function fileName(name, ext) {
  return name + "." + ext;
}
