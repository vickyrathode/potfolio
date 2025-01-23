<div
  className="g-recaptcha"
  data-sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
></div>

 <script src="https://www.google.com/recaptcha/api.js"></script>
  <script>
   function onSubmit(token) {
     document.getElementById("demo-form").submit();
   }
 </script>
 <button class="g-recaptcha" 
        data-sitekey="reCAPTCHA_site_key" 
        data-callback='onSubmit' 
        data-action='submit'>Submit</button><script src="https://www.google.com/recaptcha/api.js?render=reCAPTCHA_site_key"></script>   <script>
      function onClick(e) {
        e.preventDefault();
        grecaptcha.ready(function() {
          grecaptcha.execute('reCAPTCHA_site_key', {action: 'submit'}).then(function(token) {
              // Add your logic to submit to your backend server here.
          });
        });
      }
  </script>{
  "success": true|false,      // whether this request was a valid reCAPTCHA token for your site
  "score": number             // the score for this request (0.0 - 1.0)
  "action": string            // the action name for this request (important to verify)
  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
  "error-codes": [...]        // optional
}Use this site key in the HTML code your site serves to users.
6Lfdz8AqAAAAAHyrkmkKL6TTZ2yeY-qHdKV-9YNo
Use this secret key for communication between your site and reCAPTCHA.
6Lfdz8AqAAAAAEPidF3I_5pzDOPjnfMvwnxpwYF5