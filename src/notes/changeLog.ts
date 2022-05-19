import type { Feature } from '../models/feature';
import { Category } from '../models/category';

const changeLog: Feature[] = [
	{
		category: Category.ui,
		description:
			'El tono de rojo llega demasiado hasta el final, deseo acortar la distancia a su aparición, que comience a mostrarse desde antes',
	},

	{
		category: Category.ui,
		description:
			'Utilizar un Scale-Quantize para que cuando el Bar crezca, los cuadros puedan ser más pequeños. Supongo que tendré que crear un rango definido. También, como observación, seguro que terminaré limitando el tamaño del Bar (no puede crecer hasta el infinito)',
	},

	{
		category: Category.other,
		description: 'Subir este proyecto a Github y clonarlo desde CodeSandbox',
	},

	{
		category: Category.other,
		description:
			'Modularizar esta lista con un foreach, en ligar de tener varios li de HTML',
	},

	{
		category: Category.functionality,
		description:
			'La temperatura, el número al lado de RAM debe coincidir, debe ser dinámico',
	},

	{
		category: Category.functionality,
		description:
			'Botón para cambiar la temperatura, de preferencia un Input range o number con min&max para probar después la interpolación utilizando svelte-motion',
	},

	{
		category: Category.functionality,
		description:
			'Modularizar el Bar, establecer sus props y reutilizarlo como componente en un ciclo for simulando varias métricas de un PC: RAM, CPU. Lo ideal es que esto venga de un archivo javascript con la data.',
	},

	{
		category: Category.ui,
		description:
			'Agregar un gradiente SVG y uno CSS, esto servirá para practicar SVG, pero también para practicar lo documentado en Observable. Utilizar el Método Quantize, pero de Interpolate para detectar los stop en CSS y SVG. Una vez teniendo el gradiente en SVG, se puede pegar en Figma, en lugar de estar poniendo los stops manualmente.',
	},
];

export { changeLog };
