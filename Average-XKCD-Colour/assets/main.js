const XKCD_API_URL = "https://xkcd.com/";
const CORS_PROXY_URL = "https://corsproxy.io/";

const corsProxy = (url) => `${CORS_PROXY_URL}?${encodeURIComponent(url)}`;

document.querySelector("#avgForm").addEventListener("submit", async (e) => {
	e.preventDefault();
	const submitEl = document.querySelector("#submit");
	submitEl.disabled = true;

	const formData = new FormData(e.target);
	const url = `${XKCD_API_URL}${formData.get("id")}/info.0.json`;
	const res = await (await fetch(corsProxy(url))).json();

	const img = new Image();
	img.crossOrigin = "anonymous";
	img.src = corsProxy(res.img);
	await new Promise((resolve, reject) => {
		img.onload = () => {
			resolve();
		};
		img.onerror = () => {
			reject();
		};
	});

	const canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;
	const ctx = canvas.getContext("2d", { willReadFrequently: true });
	ctx.drawImage(img, 0, 0);

	const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	let total = [0, 0, 0];
	for (let i = 0; i < imgData.data.length; i++) {
		total[i % 4] += imgData.data[i];
	}

	img.alt = res.alt;
	const imgContainer = document.querySelector("#imageContainer");
	imgContainer.innerHTML = "";
	imgContainer.appendChild(img);

	document.querySelector(
		"#averageSentence"
	).innerText = `The average colour is `;

	const avg = total
		.slice(0, 3)
		.map((value) => Math.round(value / (imgData.data.length / 4)));

	const rgb = `rgb(${avg.join(", ")})`;
	document.querySelector("#averageValue").innerText = rgb;
	document.querySelector("#averageValueColor").style.backgroundColor = rgb;

	document.querySelector("#output").hidden = false;
	submitEl.disabled = false;
});
