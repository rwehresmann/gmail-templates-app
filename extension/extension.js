const ALLOWED_ORIGIN = "https://gmail-templates-app.herokuapp.com"

InboxSDK.load(2, "sdk_email-templates_0c739a8f53").then(function(sdk){
  sdk.Compose.registerComposeViewHandler(function(composeView){
    composeView.addButton({
      title: "Snippets",
      iconUrl: chrome.extension.getURL("./snippets-ico.svg"),
      hasDropdown: true,
      onClick: function(event) {
        event.dropdown.el.innerHTML  = '<iframe src="' + ALLOWED_ORIGIN + '/#/templates" height="500"></iframe>';
      },
    });

    window.addEventListener('message', (event) => {
      if (event.origin == ALLOWED_ORIGIN) {
        composeView.setBodyHTML(event.data);
      }
    });
  });
});
