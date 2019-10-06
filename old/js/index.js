document.onreadystatechange = function(e)
{
  console.log("test");
  if (document.readyState === 'complete')
  {
    const div = document.getElementById('background');
    const number = Math.floor((Math.random() * 5) + 1);
    div.style.backgroundImage = "url('./images/" + number + ".jpg')";
    console.log("done");
  }

};
