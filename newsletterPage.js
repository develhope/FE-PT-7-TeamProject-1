document.getElementById("subscribeBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const privacy = document.querySelector('input[name="privacy"]:checked');
  const marketing = document.querySelector('input[name="marketing"]:checked');
  const captcha = document.getElementById("notRobot").checked;

  if (!email || !privacy || !marketing || !captcha) {
    alert("Please complete all required fields before subscribing.");
    return;
  }

  alert("Subscription successful!");
});
