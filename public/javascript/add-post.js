async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_url = document.querySelector('input[name="post-url"]').value;
  const post_img = localStorage.getItem('imageURL')
  var myWidget = cloudinary.createUploadWidget({
    cloudName: 'my_cloud_name', 
    uploadPreset: 'my_preset'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
      }
   }
  )

  document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
    }, false);
}
const response = await fetch(`/api/posts`, {
  method: 'POST',
  body: JSON.stringify({
    title,
    post_url,
    post_img
  }),
  headers: {
    'Content-Type': 'application/json'
  }
});

if (response.ok) {
  document.location.replace('/dashboard');
} else {
  alert(response.statusText);
}
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
