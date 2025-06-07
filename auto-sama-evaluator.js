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
                console.log('Found radio button:', firstRadioButton);
                firstRadioButton.checked = true;  // Select the radio button
                console.log('Radio button checked:', firstRadioButton.checked);

                // Verify if the radio button is actually checked
                if (firstRadioButton.checked) {
                  console.log('Radio button is checked!');
                } else {
                  console.warn('Radio button is NOT checked after setting checked = true!');
                }

                // Optional: dispatch click event if needed (commented out for caution)
                // firstRadioButton.dispatchEvent(new Event('click'));
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
