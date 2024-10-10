export function log(mess: string) {
  if (typeof window != "undefined") {
    const placeholder = document.getElementById("placeholder");
    const p = document.createElement("p");
    p.innerText = mess;
    placeholder?.appendChild(p);
  }

  console.log(mess);
}
