const load=`<div class="job_card">
				<div class="card_container">
					<H1>X unday vakansiya mavjud emas</H1>
				</div>
			</div>`
const vakansiya = [
	{	
		id:1,
		type:"python",
		img:"./img.png",
		title:"Python ",
		joy:"Najot ta'lim",
		vazifa:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		maosh:"800$",
		soat:"08:00dan 18:00gacha",
		haftasiga:"5 kundan"

	},
	{		
		id:2,
		type:"nodejs",
		img:"./img.png",
		title:"Node js",
		joy:"Najot ta'lim",
		vazifa:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		maosh:"800$",
		soat:"08:00dan 18:00gacha",
		haftasiga:"5 kundan"

	},
	{
		id:3,
		type:"reactjs",
		img:"./img.png",
		title:"ReactJS",
		joy:"Najot ta'lim",
		vazifa:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		maosh:"800$",
		soat:"08:00dan 18:00gacha",
		haftasiga:"5 kundan"

	},
	{	
		id:4,
		type:"python",
		img:"./img.png",
		title:"Python",
		joy:"Najot ta'lim",
		vazifa:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		maosh:"800$",
		soat:"08:00dan 18:00gacha",
		haftasiga:"5 kundan"

	},
	{	
		id:5,
		type:"python",
		img:"./img.png",
		title:"Python",
		joy:"Najot ta'lim",
		vazifa:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		maosh:"800$",
		soat:"08:00dan 18:00gacha",
		haftasiga:"5 kundan"

	},
	{	
		id:6,
		type:"nodejs",
		img:"./img.png",
		title:"Nodejs",
		joy:"Najot ta'lim",
		vazifa:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		maosh:"800$",
		soat:"08:00dan 18:00gacha",
		haftasiga:"5 kundan"

	},
	{		
		id:7,
		type:"reactjs",
		img:"./img.png",
		title:"ReactJS",
		joy:"Najot ta'lim",
		vazifa:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		maosh:"800$",
		soat:"08:00dan 18:00gacha",
		haftasiga:"5 kundan"

	},
	{
		id:8,
		type:"typescript",
		img:"./img.png",
		title:"Typescript",
		joy:"Najot ta'lim",
		vazifa:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		maosh:"800$",
		soat:"08:00dan 18:00gacha",
		haftasiga:"5 kundan"

	}
]

const main = document.getElementById("main");
const btn = document.getElementById("btn");
const python = document.getElementById("py");
const react = document.getElementById("react");
const node = document.getElementById("node");
const type = document.getElementById("type");
const reset = document.getElementById("reset");
const search = document.getElementById("search")
const select = document.getElementById("select")

window.addEventListener('DOMContentLoaded', function(){
	let job_list = vakansiya.map((items)=>{	
		return `<div class="job_card">
					<div class="card_container">
						<img src=${items.img} alt="">
						<div class="card_text">
							<h3 class="title">${items.title}</h1>
							<h4>${items.catrgory}</h4>
							<h5>Vazifa:${items.desv}</h5>	
							<h4>Maosh: ${items.maosh} </h4>
							<h6>Ish vaqti:${items.price} ${items.id}</h6>
						</div>	
					</div>
				</div>`
	})
	loadding = `<div class="lds-dual-ring"></div>`
	main.innerHTML = loadding;
	setTimeout(() => {
 		 job_list=job_list.join(" ")
 		 main.innerHTML = job_list;
 		 main.style.display = 'block'
	}, "500");
})

python.addEventListener("click", function(){
	let job_list = vakansiya.map((items)=>{	
		if (items.type === "python"){
			return `<div class="job_card">
						<div class="card_container">
							<img src=${items.img} alt="">
							<div class="card_text">
								<h3 class="title">${items.title}</h1>
								<h4>${items.catrgory}</h4>
								<h5>Vazifa:${items.desv}</h5>	
								<h4>Maosh: ${items.maosh} </h4>
								<h6>Ish vaqti:${items.price} ${items.id}</h6>
							</div>	
						</div>
					</div>`
		}
	})
	main.style.display = 'flex'
	loadding = `<div class="lds-dual-ring"></div>`
	main.innerHTML = loadding;
	setTimeout(() => {
 		 job_list=job_list.join(" ")
 		 main.innerHTML = job_list;
 		 main.style.display = 'block'
	}, "500");
})	

react.addEventListener("click", function(){
	let job_list = vakansiya.map((items)=>{	
		if (items.type === "reactjs"){
			return `<div class="job_card">
						<div class="card_container">
							<img src=${items.img} alt="">
							<div class="card_text">
								<h3 class="title">${items.title}</h1>
								<h4>${items.catrgory}</h4>
								<h5>Vazifa:${items.desv}</h5>	
								<h4>Maosh: ${items.maosh} </h4>
								<h6>Ish vaqti:${items.price} ${items.id}</h6>
							</div>	
						</div>
					</div>`
		}
	})
	main.style.display = 'flex'
	loadding = `<div class="lds-dual-ring"></div>`
	main.innerHTML = loadding;
	setTimeout(() => {
 		 job_list=job_list.join(" ")
 		 main.innerHTML = job_list;
 		 main.style.display = 'block'
	}, "500");
})	
node.addEventListener("click", function(){
	let job_list = vakansiya.map((items)=>{	
		if (items.type === "nodejs"){
			return `<div class="job_card">
						<div class="card_container">
							<img src=${items.img} alt="">
							<div class="card_text">
								<h3 class="title">${items.title}</h1>
								<h4>${items.catrgory}</h4>
								<h5>Vazifa:${items.desv}</h5>	
								<h4>Maosh: ${items.maosh} </h4>
								<h6>Ish vaqti:${items.price} ${items.id}</h6>
							</div>	
						</div>
					</div>`
		}
	})
	main.style.display = 'flex'
	loadding = `<div class="lds-dual-ring"></div>`
	main.innerHTML = loadding;
	setTimeout(() => {
 		 job_list=job_list.join(" ")
 		 main.innerHTML = job_list;
 		 main.style.display = 'block'
	}, "500");
})	
type.addEventListener("click", function(){
	let job_list = vakansiya.map((items)=>{	
		if (items.type === "typescript"){
			return `<div class="job_card">
						<div class="card_container">
							<img src=${items.img} alt="">
							<div class="card_text">
								<h3 class="title">${items.title}</h1>
								<h4>${items.catrgory}</h4>
								<h5>Vazifa:${items.desv}</h5>	
								<h4>Maosh: ${items.maosh} </h4>
								<h6>Ish vaqti:${items.price} ${items.id}</h6>
							</div>	
						</div>
					</div>`
		}
	})
	main.style.display = 'flex'
	loadding = `<div class="lds-dual-ring"></div>`
	main.innerHTML = loadding;
	setTimeout(() => {
 		 job_list=job_list.join(" ")
 		 main.innerHTML = job_list;
 		 main.style.display = 'block'
	}, "500");
})	
reset.addEventListener("click", function(){
	let job_list = vakansiya.map((items)=>{	
		return `<div class="job_card">
					<div class="card_container">
						<img src=${items.img} alt="">
						<div class="card_text">
							<h3 class="title">${items.title}</h1>
							<h4>${items.catrgory}</h4>
							<h5>Vazifa:${items.desv}</h5>	
							<h4>Maosh: ${items.maosh} </h4>
							<h6>Ish vaqti:${items.price} ${items.id}</h6>
						</div>	
					</div>
				</div>`
	})
	main.style.display = 'flex'
	loadding = `<div class="lds-dual-ring"></div>`
	main.innerHTML = loadding;
	setTimeout(() => {
 		 job_list=job_list.join(" ")
 		 main.innerHTML = job_list;
 		 main.style.display = 'block'
	}, "500");
})

select.addEventListener("change", function(){
	let job_list = vakansiya.map((items)=>{	
		if (items.type === select.value){
			return `<div class="job_card">
						<div class="card_container">
							<img src=${items.img} alt="">
							<div class="card_text">
								<h3 class="title">${items.title}</h1>
								<h4>${items.catrgory}</h4>
								<h5>Vazifa:${items.desv}</h5>	
								<h4>Maosh: ${items.maosh} </h4>
								<h6>Ish vaqti:${items.price} ${items.id}</h6>
							</div>	
						</div>
					</div>`
		}
	})
	main.style.display = 'flex'
	loadding = `<div class="lds-dual-ring"></div>`
	main.innerHTML = loadding;
	setTimeout(() => {
 		 job_list=job_list.join(" ")
 		 main.innerHTML = job_list;
 		 main.style.display = 'block'
	}, "500");
});

btn.addEventListener("click", function(){
	let job_list = vakansiya.map((items)=>{	
		if (items.type === search.value){
			return `<div class="job_card">
						<div class="card_container">
							<img src=${items.img} alt="">
							<div class="card_text">
								<h3 class="title">${items.title}</h1>
								<h4>${items.catrgory}</h4>
								<h5>Vazifa:${items.desv}</h5>	
								<h4>Maosh: ${items.maosh} </h4>
								<h6>Ish vaqti:${items.price} ${items.id}</h6>
							</div>	
						</div>
					</div>`
		}
	})
	main.style.display = 'flex'
	loadding = `<div class="lds-dual-ring"></div>`
	main.innerHTML = loadding;
	setTimeout(() => {
		main.style.display = 'block'
		if (job_list !== "404") {
			job_list=job_list.join(" ")
 		 	main.innerHTML = job_list;
			
		}else{
			main.innerHTML = load;
		}
	}, "500");
});
