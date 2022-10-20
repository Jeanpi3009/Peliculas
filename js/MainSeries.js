const fila1 = document.querySelector('.contenedor-accion');
const series1 = document.querySelectorAll('.serie1');

const flechaIzquierda1 = document.getElementById('flecha-izquierda1');
const flechaDerecha1 = document.getElementById('flecha-derecha1');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha1.addEventListener('click', () => {
	fila1.scrollLeft += fila1.offsetWidth;

	const indicador1Activo = document.querySelector('.indicadores1 .activo');
	if (indicador1Activo.nextSibling) {
		indicador1Activo.nextSibling.classList.add('activo');
		indicador1Activo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda1.addEventListener('click', () => {
	fila1.scrollLeft -= fila1.offsetWidth;

	const indicador1Activo = document.querySelector('.indicadores1 .activo');
	if (indicador1Activo.previousSibling) {
		indicador1Activo.previousSibling.classList.add('activo');
		indicador1Activo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas1 = Math.ceil(series1.length / 5);
for (let i = 0; i < numeroPaginas1; i++) {
	const indicador1 = document.createElement('button');

	if (i === 0) {
		indicador1.classList.add('activo');
	}

	document.querySelector('.indicadores1').appendChild(indicador1);
	indicador1.addEventListener('click', (e) => {
		fila1.scrollLeft = i * fila1.offsetWidth;

		document.querySelector('.indicadores1 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
series1.forEach((serie1) => {
	serie1.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			series1.forEach(serie1 => serie1.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila1.addEventListener('mouseleave', () => {
	series1.forEach(serie1 => serie1.classList.remove('hover'));
});


const fila2 = document.querySelector('.contenedor-CienciaFiccion');
const series2 = document.querySelectorAll('.serie2');

const flechaIzquierda2 = document.getElementById('flecha-izquierda2');
const flechaDerecha2 = document.getElementById('flecha-derecha2');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha2.addEventListener('click', () => {
	fila2.scrollLeft += fila2.offsetWidth;

	const indicador2Activo = document.querySelector('.indicadores2 .activo');
	if (indicador2Activo.nextSibling) {
		indicador2Activo.nextSibling.classList.add('activo');
		indicador2Activo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda2.addEventListener('click', () => {
	fila2.scrollLeft -= fila2.offsetWidth;

	const indicador2Activo = document.querySelector('.indicadores2 .activo');
	if (indicador2Activo.previousSibling) {
		indicador2Activo.previousSibling.classList.add('activo');
		indicador2Activo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas2 = Math.ceil(series2.length / 5);
for (let i = 0; i < numeroPaginas2; i++) {
	const indicador2 = document.createElement('button');

	if (i === 0) {
		indicador2.classList.add('activo');
	}

	document.querySelector('.indicadores2').appendChild(indicador2);
	indicador2.addEventListener('click', (e) => {
		fila2.scrollLeft = i * fila2.offsetWidth;

		document.querySelector('.indicadores2 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
series2.forEach((serie2) => {
	serie2.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			series2.forEach(serie2 => serie2.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila2.addEventListener('mouseleave', () => {
	series2.forEach(serie2 => serie2.classList.remove('hover'));
});


const fila3 = document.querySelector('.contenedor-belico');
const series3 = document.querySelectorAll('.serie3');

const flechaIzquierda3 = document.getElementById('flecha-izquierda3');
const flechaDerecha3 = document.getElementById('flecha-derecha3');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha3.addEventListener('click', () => {
	fila3.scrollLeft += fila3.offsetWidth;

	const indicador3Activo = document.querySelector('.indicadores3 .activo');
	if (indicador3Activo.nextSibling) {
		indicador3Activo.nextSibling.classList.add('activo');
		indicador3Activo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda3.addEventListener('click', () => {
	fila3.scrollLeft -= fila3.offsetWidth;

	const indicador3Activo = document.querySelector('.indicadores3 .activo');
	if (indicador3Activo.previousSibling) {
		indicador3Activo.previousSibling.classList.add('activo');
		indicador3Activo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas3 = Math.ceil(series3.length / 5);
for (let i = 0; i < numeroPaginas3; i++) {
	const indicador3 = document.createElement('button');

	if (i === 0) {
		indicador3.classList.add('activo');
	}

	document.querySelector('.indicadores3').appendChild(indicador3);
	indicador3.addEventListener('click', (e) => {
		fila3.scrollLeft = i * fila3.offsetWidth;

		document.querySelector('.indicadores3 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
series3.forEach((serie3) => {
	serie3.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			series3.forEach(serie3 => serie3.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila3.addEventListener('mouseleave', () => {
	series3.forEach(serie3 => serie3.classList.remove('hover'));
});


const fila4 = document.querySelector('.contenedor-romantico');
const series4 = document.querySelectorAll('.serie4');

const flechaIzquierda4 = document.getElementById('flecha-izquierda4');
const flechaDerecha4 = document.getElementById('flecha-derecha4');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha4.addEventListener('click', () => {
	fila4.scrollLeft += fila4.offsetWidth;

	const indicador4Activo = document.querySelector('.indicadores4 .activo');
	if (indicador4Activo.nextSibling) {
		indicador4Activo.nextSibling.classList.add('activo');
		indicador4Activo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda4.addEventListener('click', () => {
	fila4.scrollLeft -= fila4.offsetWidth;

	const indicador4Activo = document.querySelector('.indicadores4 .activo');
	if (indicador4Activo.previousSibling) {
		indicador4Activo.previousSibling.classList.add('activo');
		indicador4Activo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas4 = Math.ceil(series4.length / 5);
for (let i = 0; i < numeroPaginas4; i++) {
	const indicador4 = document.createElement('button');

	if (i === 0) {
		indicador4.classList.add('activo');
	}

	document.querySelector('.indicadores4').appendChild(indicador4);
	indicador4.addEventListener('click', (e) => {
		fila4.scrollLeft = i * fila4.offsetWidth;

		document.querySelector('.indicadores4 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
series4.forEach((serie4) => {
	serie4.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			series4.forEach(serie4 => serie4.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila4.addEventListener('mouseleave', () => {
	series4.forEach(serie4 => serie4.classList.remove('hover'));
});


const fila5 = document.querySelector('.contenedor-infantil');
const series5 = document.querySelectorAll('.serie5');

const flechaIzquierda5 = document.getElementById('flecha-izquierda5');
const flechaDerecha5 = document.getElementById('flecha-derecha5');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha5.addEventListener('click', () => {
	fila5.scrollLeft += fila5.offsetWidth;

	const indicador5Activo = document.querySelector('.indicadores5 .activo');
	if (indicador5Activo.nextSibling) {
		indicador5Activo.nextSibling.classList.add('activo');
		indicador5Activo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda5.addEventListener('click', () => {
	fila5.scrollLeft -= fila5.offsetWidth;

	const indicador5Activo = document.querySelector('.indicadores5 .activo');
	if (indicador5Activo.previousSibling) {
		indicador5Activo.previousSibling.classList.add('activo');
		indicador5Activo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas5 = Math.ceil(series5.length / 5);
for (let i = 0; i < numeroPaginas5; i++) {
	const indicador5 = document.createElement('button');

	if (i === 0) {
		indicador5.classList.add('activo');
	}

	document.querySelector('.indicadores5').appendChild(indicador5);
	indicador5.addEventListener('click', (e) => {
		fila5.scrollLeft = i * fila5.offsetWidth;

		document.querySelector('.indicadores5 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
series5.forEach((serie5) => {
	serie5.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			series5.forEach(serie5 => serie5.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila5.addEventListener('mouseleave', () => {
	series5.forEach(serie5 => serie5.classList.remove('hover'));
});


const fila6 = document.querySelector('.contenedor-terror');
const series6 = document.querySelectorAll('.serie6');

const flechaIzquierda6 = document.getElementById('flecha-izquierda6');
const flechaDerecha6 = document.getElementById('flecha-derecha6');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha6.addEventListener('click', () => {
	fila6.scrollLeft += fila6.offsetWidth;

	const indicador6Activo = document.querySelector('.indicadores6 .activo');
	if (indicador6Activo.nextSibling) {
		indicador6Activo.nextSibling.classList.add('activo');
		indicador6Activo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda6.addEventListener('click', () => {
	fila6.scrollLeft -= fila6.offsetWidth;

	const indicador6Activo = document.querySelector('.indicadores6 .activo');
	if (indicador6Activo.previousSibling) {
		indicador6Activo.previousSibling.classList.add('activo');
		indicador6Activo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas6 = Math.ceil(series6.length / 6);
for (let i = 0; i < numeroPaginas6; i++) {
	const indicador6 = document.createElement('button');

	if (i === 0) {
		indicador6.classList.add('activo');
	}

	document.querySelector('.indicadores6').appendChild(indicador6);
	indicador6.addEventListener('click', (e) => {
		fila6.scrollLeft = i * fila6.offsetWidth;

		document.querySelector('.indicadores6 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
series6.forEach((serie6) => {
	serie6.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			series6.forEach(serie6 => serie6.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila6.addEventListener('mouseleave', () => {
	series6.forEach(serie6 => serie6.classList.remove('hover'));
});


const fila7 = document.querySelector('.contenedor-suspenso');
const series7 = document.querySelectorAll('.serie7');

const flechaIzquierda7 = document.getElementById('flecha-izquierda7');
const flechaDerecha7 = document.getElementById('flecha-derecha7');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha7.addEventListener('click', () => {
	fila7.scrollLeft += fila7.offsetWidth;

	const indicador7Activo = document.querySelector('.indicadores7 .activo');
	if (indicador7Activo.nextSibling) {
		indicador7Activo.nextSibling.classList.add('activo');
		indicador7Activo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda7.addEventListener('click', () => {
	fila7.scrollLeft -= fila7.offsetWidth;

	const indicador7Activo = document.querySelector('.indicadores7 .activo');
	if (indicador7Activo.previousSibling) {
		indicador7Activo.previousSibling.classList.add('activo');
		indicador7Activo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas7 = Math.ceil(series7.length / 7);
for (let i = 0; i < numeroPaginas7; i++) {
	const indicador7 = document.createElement('button');

	if (i === 0) {
		indicador7.classList.add('activo');
	}

	document.querySelector('.indicadores7').appendChild(indicador7);
	indicador7.addEventListener('click', (e) => {
		fila7.scrollLeft = i * fila7.offsetWidth;

		document.querySelector('.indicadores7 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
series7.forEach((serie7) => {
	serie7.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			series7.forEach(serie7 => serie7.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila7.addEventListener('mouseleave', () => {
	series7.forEach(serie7 => serie7.classList.remove('hover'));
});


const fila8 = document.querySelector('.contenedor-comedia');
const series8 = document.querySelectorAll('.serie8');

const flechaIzquierda8 = document.getElementById('flecha-izquierda8');
const flechaDerecha8 = document.getElementById('flecha-derecha8');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha8.addEventListener('click', () => {
	fila8.scrollLeft += fila8.offsetWidth;

	const indicador8Activo = document.querySelector('.indicadores8 .activo');
	if (indicador8Activo.nextSibling) {
		indicador8Activo.nextSibling.classList.add('activo');
		indicador8Activo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda8.addEventListener('click', () => {
	fila8.scrollLeft -= fila8.offsetWidth;

	const indicador8Activo = document.querySelector('.indicadores8 .activo');
	if (indicador8Activo.previousSibling) {
		indicador8Activo.previousSibling.classList.add('activo');
		indicador8Activo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas8 = Math.ceil(series8.length / 8);
for (let i = 0; i < numeroPaginas8; i++) {
	const indicador8 = document.createElement('button');

	if (i === 0) {
		indicador8.classList.add('activo');
	}

	document.querySelector('.indicadores8').appendChild(indicador8);
	indicador8.addEventListener('click', (e) => {
		fila8.scrollLeft = i * fila8.offsetWidth;

		document.querySelector('.indicadores8 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
series8.forEach((serie8) => {
	serie8.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			series8.forEach(serie8 => serie8.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila8.addEventListener('mouseleave', () => {
	series8.forEach(serie8 => serie8.classList.remove('hover'));
});