//Перелистывание отзывов в блоке с отзывами
let buttons = document.querySelectorAll(".bn");
	images = document.querySelectorAll(".image__review img");
	globalReview = document.querySelector(".text__review");
	reviews = document.querySelector(".review");
	names = document.querySelector(".name__user p");
	posts = document.querySelector(".name__user span");

document.querySelector("#bn_1").classList.add("active");

document.querySelector("#bn_1").addEventListener("click", function(){
	//Проверка
	if(document.querySelector("#bn_1").classList.contains("active")){
		globalReview.style.opacity = "1";
	}else{
		globalReview.style.opacity = "0";
	}

	if(document.querySelector("#bn_1").classList.contains("active")){
		reviews.style.opacity = "1"
	}

	document.querySelector("#bn_1").classList.add("active");
	document.querySelector("#bn_2").classList.remove("active");
	document.querySelector("#bn_3").classList.remove("active");

	//Анимация
	for(let i = 0; i < 1 && i < images.length; i++){
		images[i].style.opacity = "1"
	}

	for(let i = 1; i < 2 && i < images.length; i++){
		images[i].style.opacity = "0"
	}

	for(let i = 2; i < 3 && i < images.length; i++){
		images[i].style.opacity = "0"
	}

	setTimeout(function(){
		globalReview.style.opacity = "1";
		posts.innerHTML = "CEO of AVC Group";
		names.innerHTML = "Alon Smith";
		reviews.innerHTML = "Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Facere doloribus iusto, assumenda nulla quam maiores maxime, amet cum quas dolore, sunt distinctio adipisci odio iste, debitis. Veniam ab aliquam, ex praesentium neque vel explicabo ratione accusamus culpa enim impedit sequi veritatis dicta quaerat autem itaque beatae fugit velit minus tempore nesciunt a natus maiores quos! Vitae minima in pariatur quia nobis impedit enim, rerum, sed.";
	}, 300)
})

document.querySelector("#bn_2").addEventListener("click", function(){
	//Проверка
	if(document.querySelector("#bn_2").classList.contains("active")){
		globalReview.style.opacity = "1";
	}else{
		globalReview.style.opacity = "0";
	}

	if(document.querySelector("#bn_2").classList.contains("active")){
		reviews.style.opacity = "1"
	}

	document.querySelector("#bn_1").classList.remove("active");
	document.querySelector("#bn_2").classList.add("active");
	document.querySelector("#bn_3").classList.remove("active");

	//Анимация
	for(let i = 0; i < 1 && i < images.length; i++){
		images[i].style.opacity = "0"
	}

	for(let i = 1; i < 2 && i < images.length; i++){
		images[i].style.opacity = "1"
	}

	for(let i = 2; i < 3 && i < images.length; i++){
		images[i].style.opacity = "0"
	}

	setTimeout(function(){
		globalReview.style.opacity = "1";
		posts.innerHTML = "Participant";
		names.innerHTML = "Alex Bear";
		reviews.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias pariatur rem, corrupti laborum minima excepturi at quas, perferendis officiis, corporis atque placeat eos ad in quasi accusantium impedit dolorem quidem velit provident laboriosam fugiat. Amet placeat odio enim. Nihil unde quasi debitis iure nostrum veritatis, eligendi. Delectus ipsum, minus magnam ad dolor nostrum suscipit vero animi nobis deserunt quasi accusantium pariatur vitae itaque recusandae rem porro molestias asperiores libero. Obcaecati.";
	}, 300)
})

document.querySelector("#bn_3").addEventListener("click", function(){
	//Проверка
	if(document.querySelector("#bn_3").classList.contains("active")){
		globalReview.style.opacity = "1";
	}else{
		globalReview.style.opacity = "0";
	}

	if(document.querySelector("#bn_3").classList.contains("active")){
		reviews.style.opacity = "1"
	}

	document.querySelector("#bn_1").classList.remove("active");
	document.querySelector("#bn_2").classList.remove("active");
	document.querySelector("#bn_3").classList.add("active");

	//Анимация
	for(let i = 0; i < 1 && i < images.length; i++){
		images[i].style.opacity = "0"
	}

	for(let i = 1; i < 2 && i < images.length; i++){
		images[i].style.opacity = "0"
	}

	for(let i = 2; i < 3 && i < images.length; i++){
		images[i].style.opacity = "1"
	}

	setTimeout(function(){
		globalReview.style.opacity = "1";
		posts.innerHTML = "Participant";
		names.innerHTML = "Mark Braun";
		reviews.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Beatae est magni sequi quod magnam enim ab asperiores sint explicabo neque repellat, iure voluptatem dolorem sed rem nihil ducimus assumenda voluptatum quos similique doloribus cum. Ut officia repudiandae blanditiis, eligendi cum ipsam dolores quia placeat maxime, dicta sint modi soluta in porro dolor? Deleniti, nulla cupiditate?";
	}, 300)
})

//Ответы на вопросы
function questionAnswer(){
	const answerBlock = document.querySelector(".answer");
		answerText = document.querySelector(".answer p");
		questions = document.querySelectorAll(".question_element");

		document.querySelector(".first_question").classList.add("activity");

		for(let i = 0; i < 1 && i < questions.length; i++){
			questions[i].addEventListener("click", function(){
				//Убираем прозрачность
				if(questions[i].classList.contains("activity")){

				}else{
					answerText.style.opacity = "0";
					setTimeout(function(){
						answerText.style.opacity = "1";
						answerText.innerHTML = "Lorem ipsum dolor sit, amet consectetur, adipisicing elit. Explicabo dignissimos possimus, consequuntur numquam ipsam voluptatem, ab asperiores voluptatibus quas, quo veritatis, voluptates temporibus deleniti autem suscipit dolores debitis porro. Cupiditate quod, vitae! Doloribus, animi, facere.";
					}, 300)
				}
				//Добавляем/Убираем классы
				document.querySelector(".first_question").classList.add("activity");
				document.querySelector(".second_question").classList.remove("activity");
				document.querySelector(".third_question").classList.remove("activity");
				document.querySelector(".fourth_question").classList.remove("activity");
				document.querySelector(".fifth_question").classList.remove("activity");
				document.querySelector(".sixth_question").classList.remove("activity");
			})
		}

		for(let i = 1; i < 2 && i < questions.length; i++){
			questions[i].addEventListener("click", function(){
				//Убираем прозрачность
				if(questions[i].classList.contains("activity")){

				}else{
					answerText.style.opacity = "0";
					setTimeout(function(){
						answerText.style.opacity = "1";
						answerText.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing, elit. Natus vel ut fugiat unde dolores praesentium laborum nisi alias quos repudiandae totam odio expedita deserunt aliquam, mollitia, aperiam. Earum tenetur facilis voluptas voluptatem libero quia quo consequuntur vel, quasi, aliquid! Nobis!";
					}, 300)
				}
				//Добавляем/Убираем классы
				document.querySelector(".first_question").classList.remove("activity");
				document.querySelector(".second_question").classList.add("activity");
				document.querySelector(".third_question").classList.remove("activity");
				document.querySelector(".fourth_question").classList.remove("activity");
				document.querySelector(".fifth_question").classList.remove("activity");
				document.querySelector(".sixth_question").classList.remove("activity");
			})
		}

		for(let i = 2; i < 3 && i < questions.length; i++){
			questions[i].addEventListener("click", function(){
				//Убираем прозрачность
				if(questions[i].classList.contains("activity")){

				}else{
					answerText.style.opacity = "0";
					setTimeout(function(){
						answerText.style.opacity = "1";
						answerText.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolorum facilis non assumenda saepe voluptatum, distinctio delectus temporibus perferendis inventore harum, excepturi quisquam adipisci consequatur facere tenetur. Deserunt, iusto atque. Pariatur necessitatibus ipsum, numquam assumenda iusto voluptatibus distinctio et vitae rem sapiente? Eius, laudantium, hic?";
					}, 300)
				}
				//Добавляем/Убираем классы
				document.querySelector(".first_question").classList.remove("activity");
				document.querySelector(".second_question").classList.remove("activity");
				document.querySelector(".third_question").classList.add("activity");
				document.querySelector(".fourth_question").classList.remove("activity");
				document.querySelector(".fifth_question").classList.remove("activity");
				document.querySelector(".sixth_question").classList.remove("activity");
			})
		}

		for(let i = 3; i < 4 && i < questions.length; i++){
			questions[i].addEventListener("click", function(){
				//Убираем прозрачность
				if(questions[i].classList.contains("activity")){

				}else{
					answerText.style.opacity = "0";
					setTimeout(function(){
						answerText.style.opacity = "1";
						answerText.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cum modi, ipsum dolor officia nemo dicta numquam quibusdam ab debitis dolores iure eligendi ex dolorum.";
					}, 300)
				}
				//Добавляем/Убираем классы
				document.querySelector(".first_question").classList.remove("activity");
				document.querySelector(".second_question").classList.remove("activity");
				document.querySelector(".third_question").classList.remove("activity");
				document.querySelector(".fourth_question").classList.add("activity");
				document.querySelector(".fifth_question").classList.remove("activity");
				document.querySelector(".sixth_question").classList.remove("activity");
			})
		}

		for(let i = 4; i < 5 && i < questions.length; i++){
			questions[i].addEventListener("click", function(){
				//Убираем прозрачность
				if(questions[i].classList.contains("activity")){

				}else{
					answerText.style.opacity = "0";
					setTimeout(function(){
						answerText.style.opacity = "1";
						answerText.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsa natus ullam voluptas asperiores est molestiae fuga architecto iste perferendis pariatur deserunt praesentium quos odio aliquam cumque, mollitia sint dolores eos repellendus voluptatum id, vel. Molestias a natus, beatae! Pariatur ullam est debitis rem, repellat tempora doloremque accusamus beatae corrupti.";
					}, 300)
				}
				//Добавляем/Убираем классы
				document.querySelector(".first_question").classList.remove("activity");
				document.querySelector(".second_question").classList.remove("activity");
				document.querySelector(".third_question").classList.remove("activity");
				document.querySelector(".fourth_question").classList.remove("activity");
				document.querySelector(".fifth_question").classList.add("activity");
				document.querySelector(".sixth_question").classList.remove("activity");
			})
		}

		for(let i = 5; i < 6 && i < questions.length; i++){
			questions[i].addEventListener("click", function(){
				//Убираем прозрачность
				if(questions[i].classList.contains("activity")){

				}else{
					answerText.style.opacity = "0";
					setTimeout(function(){
						answerText.style.opacity = "1";
						answerText.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores officia, nesciunt voluptas provident consequatur temporibus explicabo, quasi molestias. Aut, quisquam iure. Nesciunt veritatis dolorem, minima vero doloremque amet corporis corrupti, dignissimos, ducimus, quidem distinctio nam. Hic, dolorum dolorem?";
					}, 300)
				}
				//Добавляем/Убираем классы
				document.querySelector(".first_question").classList.remove("activity");
				document.querySelector(".second_question").classList.remove("activity");
				document.querySelector(".third_question").classList.remove("activity");
				document.querySelector(".fourth_question").classList.remove("activity");
				document.querySelector(".fifth_question").classList.remove("activity");
				document.querySelector(".sixth_question").classList.add("activity");
			})
		}
}

questionAnswer();