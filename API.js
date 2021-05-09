const url = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json";

export async function getUsers() {
  const res = await fetch(url);
  if (res.ok) {
    return res.json();
  }
  throw new Error(`${res.statusText} (${res.status})`);
}

export async function deleteUser(id) {
  await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
}

export async function createUser(user) {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export async function editUser(id, user) {
  await fetch(`${url}/${id}`, {
    headers: { "Content-Type": "application/json" },
    method: "PATCH",
    body: JSON.stringify(user),
  });
}
