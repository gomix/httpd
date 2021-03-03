'use strict';

angular
  .module('mysystemstatusbadgeextension', ['openshiftConsole'])
  .run([
    'extensionRegistry',
    function(extensionRegistry) {

      var system_status_elem = $('<a href="https://badge.cloud.paas.psi.redhat.com/"' +
      'target="_blank" class="nav-item-iconic system-status"><span title="' +
      'System Status" class="fa status-icon pficon-warning-triangle-o">' +
      'Warning:</span>This cluster will be decomissioned on May 14th.</a>');

      // Add the extension point to the registry so the badge appears
      // To disable the badge, comment this block out
      extensionRegistry
        .add('nav-system-status', function() {
          return [{
            type: 'dom',
            node: system_status_elem
          }];
        });
    }
  ]);

hawtioPluginLoader.addModule('mysystemstatusbadgeextension');
