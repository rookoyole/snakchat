async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_url = document.querySelector('input[name="post-url"]').value;
  const post_description = document.querySelector('input[name="post-description"]').value;
  const category = document.querySelector('select[name="category"]').value;
  
  const post_img = localStorage.getItem('imageURL');
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_url,
      post_description,
      post_img,
      category
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
} 
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
