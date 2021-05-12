async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_url = document.querySelector('input[name="post-url"]').value;
  const post_img = document.querySelector('input[name="post-image"]').value;
  console.log(post_img);
  let data = {
    "file": post_img,
    "upload_preset": "snakchat"
  }
  console.log(data);
  const img_url = await fetch(`https://api.cloudinary.com/v1_1/dnq8lv71z/upload`, {
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
    method: 'POST'
  }).then(async r => {
    let data = await r.json()
    console.log(data);
    const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_url,
      img: data.url
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  })
  

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
