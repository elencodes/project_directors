//1 Сохраняем в переменную directors массив из объектов
const directors = [{
		name: 'Стивен Спилберг',
		career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
		films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
		top_rated_film: 'Список Шиндлера'
	},
	{
		name: 'Кристофер Нолан',
		career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
		films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
		top_rated_film: 'Начало'
	},
	{
		name: 'Мартин МакДона',
		career: 'Сценарист, Режиссёр, Продюсер',
		films: 'https://www.film.ru/person/martin-makdonah',
		top_rated_film: 'Три билборда на границе Эббинга, Миссури'
	},
	{
		name: 'Алексей Балабанов',
		career: 'Режиссёр, Сценарист, Актёр, Продюсер',
		films: 'https://www.film.ru/person/aleksey-balabanov',
		top_rated_film: 'Брат'
	},
	{
		name: 'Питер Фаррелли',
		career: 'Продюсер, Режиссёр, Сценарист, Актёр',
		films: 'https://www.film.ru/person/piter-farrelli',
		top_rated_film: 'Зелёная книга'
	},
	{
		name: 'Юрий Быков',
		career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
		films: 'https://www.film.ru/person/yuriy-bykov',
		top_rated_film: 'Дурак'
	},
	{
		name: 'Жан-Марк Валле',
		career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
		films: 'https://www.film.ru/person/zhan-mark-valle',
		top_rated_film: 'Далласский клуб покупателей'
	},
];

//2. Ищем объекты (область списка, абзац для вывода фильмов) в HTML документе для дальнейшего взаимодействия.
const list = document.querySelector(`#list`);
const bestFilms = document.querySelector(`#best-films`);

//3. С помощью метода forEach перебираем элементы массива и выполняем функцию для каждого элемента массива 
directors.forEach(function (item) {
	//3.1 Создаем новые элементы (нумерованный список и заголовки) для отображения списка имен режиссеров
	const director = document.createElement(`li`);
	const name = document.createElement(`h3`);
	//3.2 Обращаемся к свойству объектов name и выводим список все имен режиссеров
	const nameDirectors = item.name;
	//3.3 Наполняем новый элемент контентом (значение тега h3 теперь имя режиссера)
	name.textContent = `${nameDirectors}`;
	//3.4 Вставляем новый элемент (имя) внутрь и в начало списка с информацией о режиссерах
	director.appendChild(name);
	//3.5 Создаем новый элемент (абзац) для отображения карьерного списка режиссеров
	const career = document.createElement(`p`);
	//3.6 Обращаемся к свойству объектов career и выводим карьерный список
	const careerDirectors = item.career;
	//3.7 Наполняем новый элемент контентом (значение тега p теперь карьера режиссера)
	career.textContent = `${careerDirectors}`;
	//3.8 Вставляем новый элемент (карьера) внутрь и в начало списка с информацией о режиссерах (после имен)
	director.appendChild(career);
	//3.9 Создаем новый элемент (ссылку) для отображения фильмов режиссеров
	const link = document.createElement(`a`);
	//3.10 Обращаемся к свойству объектов films и выводим список фильмов
	const filmDirectors = item.films;
	//3.11 Меняем содержимое недавно созданного тега <a>в HTML файле для корректного отображения ссылки на фильмы
	link.innerHTML = `<a href="${filmDirectors}">Фильмография</a>`;
	//3.12 Вставляем новый элемент (карьера) внутрь и в начало списка с информацией о режиссерах (после карьеры)
	director.appendChild(link);
	//3.13 Вставляем элемент (нумерованный cписок) внутрь и в начало общего списка (тега <ol>)
	list.appendChild(director);
});

//4 С помощью метода map вызываем функцию для каждого элемента массива (для свойства объектов top_rated_film) и возвращаем новый массив из данных (список лучших фильмов)
const topFilmsList = directors.map(function (item) {
	return item.top_rated_film;
});

//4 Преобразовываем массив лучших фильмов в строку с разделителем в виде ', '
const showTopFilmsList = topFilmsList.join(', ');

//5 Создаем новый элемент (абзац) для отображения лучших фильмов режиссеров
const filmsList = document.createElement(`p`);
//5.1 Наполняем новый элемент контентом (значение тега p теперь лучших фильмов режиссеров)
filmsList.textContent = `${showTopFilmsList}`;
//5.2 Вставляем элемент (лучшие фильмов) внутрь и в начало абзаца (тега <p> в HTML)
bestFilms.appendChild(filmsList);
//5.3 Выравниваем текст абзаца со списком лучших фильмов по центру
filmsList.style.textAlign = "center";