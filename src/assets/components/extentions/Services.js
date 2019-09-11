const sweets = [
	{
		id: 1,
		name: 'Cookies',
		tradeMark: 'Sunny products',
		value: 50,
		price: 10,
		date: '01.05.2019',
		image: '../../../image1.jpg'
	},
	{
		id: 2,
		name: 'Chocolate chip',
		tradeMark: 'Rainy produtcs',
		value: 42,
		price: 14,
		date: '01.07.2019',
		image: '../../../image1.jpg'		
	}
]

const vegetables = [
	{
		id: 3,
		name: 'Watermelon',
		tradeMark: 'Fresh fruits',
		value: 200,
		price: 4,
		date: '02.05.2019',
		image: '../../../image1.jpg'
	}
]

const fruits = [
	{
		id: 4,
		name: 'Orange',
		tradeMark: 'Fresh fruits',
		value: 40,
		price: 9,
		date: '01.05.2019',
		image: '../../../image1.jpg'
	}
]

export const ProductsSweets = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(sweets);
	}, 1000);
	//reject();
});

export const ProductsFruits = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(fruits);
	}, 1000);
});

export const ProductsVegetables = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(vegetables);
	}, 1000);
});