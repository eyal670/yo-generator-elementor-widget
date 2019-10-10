'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  async prompting() {
    this.log(
      yosay(`Welcome to ${chalk.red('generator-elementor-widget')} generator!`)
    );
    this.answers = await this.prompt([{
        type: 'input',
        name: 'auth_name',
        message: 'Your name:',
      },
      {
        type: 'input',
        name: 'plugin_name',
        message: 'Plugin name:',
      },
      {
        type: 'input',
        name: 'widget_name',
        message: 'Widget name:',
      }
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('pluginName.php'),
      this.destinationPath(this.answers.plugin_name + '.php '), {
        auth_name: this.answers.auth_name
      } // user answer `title` used
    );
    this.fs.copyTpl(
      this.templatePath('modules/widgetName/widgets/widget-widgetName.php'),
      this.destinationPath('modules/' + this.answers.widget_name + '/widgets/widget-' + this.answers.widget_name + '.php '), {
        auth_name: this.answers.auth_name,
        widget_name: this.answers.widget_name
      } // user answer `title` used
    );
  }
};