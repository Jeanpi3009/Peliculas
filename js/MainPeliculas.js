const fila1 = document.querySelector('.contenedor-accion');
const peliculas1 = document.querySelectorAll('.pelicula1');

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
const numeroPaginas1 = Math.ceil(peliculas1.length / 5);
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
peliculas1.forEach((pelicula1) => {
	pelicula1.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas1.forEach(pelicula1 => pelicula1.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila1.addEventListener('mouseleave', () => {
	peliculas1.forEach(pelicula1 => pelicula1.classList.remove('hover'));
});


const fila2 = document.querySelector('.contenedor-CienciaFiccion');
const peliculas2 = document.querySelectorAll('.pelicula2');

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
const numeroPaginas2 = Math.ceil(peliculas2.length / 5);
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
peliculas2.forEach((pelicula2) => {
	pelicula2.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas2.forEach(pelicula2 => pelicula2.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila2.addEventListener('mouseleave', () => {
	peliculas2.forEach(pelicula2 => pelicula2.classList.remove('hover'));
});


const fila3 = document.querySelector('.contenedor-belico');
const peliculas3 = document.querySelectorAll('.pelicula3');

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
const numeroPaginas3 = Math.ceil(peliculas3.length / 5);
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
peliculas3.forEach((pelicula3) => {
	pelicula3.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas3.forEach(pelicula3 => pelicula3.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila3.addEventListener('mouseleave', () => {
	peliculas3.forEach(pelicula3 => pelicula3.classList.remove('hover'));
});


const fila4 = document.querySelector('.contenedor-romantico');
const peliculas4 = document.querySelectorAll('.pelicula4');

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
const numeroPaginas4 = Math.ceil(peliculas4.length / 5);
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
peliculas4.forEach((pelicula4) => {
	pelicula4.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas4.forEach(pelicula4 => pelicula4.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila4.addEventListener('mouseleave', () => {
	peliculas4.forEach(pelicula4 => pelicula4.classList.remove('hover'));
});


const fila5 = document.querySelector('.contenedor-infantil');
const peliculas5 = document.querySelectorAll('.pelicula5');

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
const numeroPaginas5 = Math.ceil(peliculas5.length / 5);
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
peliculas5.forEach((pelicula5) => {
	pelicula5.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas5.forEach(pelicula5 => pelicula5.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila5.addEventListener('mouseleave', () => {
	peliculas5.forEach(pelicula5 => pelicula5.classList.remove('hover'));
});


const fila6 = document.querySelector('.contenedor-terror');
const peliculas6 = document.querySelectorAll('.pelicula6');

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
const numeroPaginas6 = Math.ceil(peliculas6.length / 6);
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
peliculas6.forEach((pelicula6) => {
	pelicula6.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas6.forEach(pelicula6 => pelicula6.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila6.addEventListener('mouseleave', () => {
	peliculas6.forEach(pelicula6 => pelicula6.classList.remove('hover'));
});


const fila7 = document.querySelector('.contenedor-suspenso');
const peliculas7 = document.querySelectorAll('.pelicula7');

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
const numeroPaginas7 = Math.ceil(peliculas7.length / 7);
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
peliculas7.forEach((pelicula7) => {
	pelicula7.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas7.forEach(pelicula7 => pelicula7.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila7.addEventListener('mouseleave', () => {
	peliculas7.forEach(pelicula7 => pelicula7.classList.remove('hover'));
});


const fila8 = document.querySelector('.contenedor-comedia');
const peliculas8 = document.querySelectorAll('.pelicula8');

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
const numeroPaginas8 = Math.ceil(peliculas8.length / 8);
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
peliculas8.forEach((pelicula8) => {
	pelicula8.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas8.forEach(pelicula8 => pelicula8.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila8.addEventListener('mouseleave', () => {
	peliculas8.forEach(pelicula8 => pelicula8.classList.remove('hover'));
});