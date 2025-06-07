(function() {
  // Flags to track detection and action status
  let found = false;
  let radioButtonsClicked = false;

  // Main function to check iframe content and select radio buttons
  function checkIframeContent() {
    // Get all iframes on the page
    const iframes = document.getElementsByTagName('iframe');

    if (iframes.length === 0) {
      console.log('No iframes found on the page.');
      return;
    }

    // Assume the first iframe contains the evaluation form
    const iframe = iframes[0];

    // Function to perform the radio button selection inside the iframe
    function performCheck() {
      try {
        // Access iframe's document
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        // Find all elements with class 'radio-list' (each containing radio buttons)
        const radioLists = iframeDocument.querySelectorAll('.radio-list');

        if (radioLists.length > 0) {
          if (!found) {
            console.log('Okay! Radio button rows found in the iframe.');
            found = true;
          }

          // If not already clicked, select the first radio button in each row
          if (!radioButtonsClicked) {
            console.log('Selecting the first radio button in each row...');
            radioLists.forEach(radioList => {
              const firstRadioButton = radioList.querySelector('input[type="radio"]');
              if (firstRadioButton) {
                // Programmatically check the radio button
                firstRadioButton.checked = true;

                /*
                  Important:
                  Simply setting 'checked = true' doesn't always notify the page of the change,
                  especially if it relies on event listeners to update internal state.
                  So, we manually dispatch 'change' and 'click' events to ensure the site registers the selection.
                */
                firstRadioButton.dispatchEvent(new Event('change', { bubbles: true }));
                firstRadioButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));

              } else {
                console.warn('No radio button found in this row!');
              }
            });

            radioButtonsClicked = true;
            console.log('All first radio buttons selected.');
          }
        } else {
          // No radio buttons found yet, reset flags for retry
          console.log('Radio button rows not found in the iframe yet.');
          found = false;
          radioButtonsClicked = false;
        }
      } catch (e) {
        console.error('Error accessing iframe content:', e);
      }
    }

    // Check if iframe content is fully loaded before running the selection
    if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
      performCheck();
    } else {
      console.log('Iframe not yet loaded');
    }
  }

  // Run checkIframeContent every 2 seconds to handle loading delays
  setInterval(checkIframeContent, 2000);
})();
