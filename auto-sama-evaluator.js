(function () {
  // Flags to ensure actions only run once
  let found = false;
  let radioButtonsClicked = false;

  // Main routine to check iframe content and auto-select radio buttons
  function checkIframeContent() {
    const iframes = document.getElementsByTagName('iframe');

    if (iframes.length === 0) {
      console.log('%c[INFO] No iframes detected on the page.', 'color: gray; font-style: italic;');
      return;
    }

    const iframe = iframes[0]; // Assuming first iframe contains the target content

    function performCheck() {
      try {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        const radioLists = iframeDocument.querySelectorAll('.radio-list');

        if (radioLists.length > 0) {
          if (!found) {
            console.log('%c✅ Found radio button sections inside the iframe.', 'color: green; font-weight: bold;');
            found = true;
          }

          if (!radioButtonsClicked) {
            console.log('%c➡️ Selecting the first radio button in each group...', 'color: dodgerblue; font-weight: bold;');

            radioLists.forEach(radioList => {
              const firstRadioButton = radioList.querySelector('input[type="radio"]');

              if (firstRadioButton) {
                firstRadioButton.checked = true;

                // Trigger events to mimic real user interaction
                firstRadioButton.dispatchEvent(new Event('change', { bubbles: true }));
                firstRadioButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
              } else {
                console.warn('%c[WARNING] A radio group was found without any radio button.', 'color: orange;');
              }
            });

            radioButtonsClicked = true;
            console.log('%c🎯 Radio button selection completed successfully.', 'color: limegreen; font-weight: bold;');
          }
        } else {
          // Reset if radio buttons not yet present
          console.log('%c[WAIT] Radio button sections not found in the iframe yet.', 'color: goldenrod;');
          found = false;
          radioButtonsClicked = false;
        }
      } catch (e) {
        console.error('%c[ERROR] Failed to access iframe content:', 'color: red; font-weight: bold;', e);
      }
    }

    // Ensure iframe is loaded before attempting to interact with its contents
    if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
      performCheck();
    } else {
      console.log('%c[INFO] Iframe content is not fully loaded yet.', 'color: gray; font-style: italic;');
    }
  }

  // Poll every 2 seconds to wait for iframe and content to be ready
  setInterval(checkIframeContent, 2000);
})();
