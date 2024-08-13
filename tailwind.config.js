/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			'max-xs': { max: '480px' },
			'max-xs-sm': { max: '590px' },
			'max-sm': { max: '768px' },
			'max-md': { max: '992px' },
			'max-lg': { max: '1200px' },
			'max-xl': { max: '1399px' },
			'min-xs': { min: '480px' },
			'min-sm': { min: '768px' },
			'min-md': { min: '992px' },
			'min-lg': { min: '1200px' },
			'min-xl': { min: '1399px' },
		},
		extend: {
			colors: {
				white: '#fff',
				black: '#000',
				black_500: 'rgb(24, 24, 24)',
				black_600: '#1f1f1f',
				black_700: '#2d2e2e',
				black_850: '#171717',
				black_800: 'rgb(7, 7, 7)',
				black_900: '#181818',
				purple: '#3333A3',
				gray: '#c4c3c2',
			},
			backgroundImage: {
				'blue-gradient':
					'linear-gradient(180deg, rgb(51, 51, 163) 5.086%, rgb(18, 18, 18) 33.397%)',
				'purple-gradient':
					'linear-gradient(112.78deg, rgb(161, 56, 147) 5.692%,rgb(98, 155, 238) 97.443%);',
				'yellow-gradient':
					'linear-gradient(180.00deg, rgb(222, 246, 40) 5.086%,rgb(18, 18, 18) 43.283%);',
			},
			keyframes: {
				wave: {
					'0%': { transform: 'rotate(0.0deg)' },
					'10%': { transform: 'rotate(14deg)' },
					'20%': { transform: 'rotate(-8deg)' },
					'30%': { transform: 'rotate(14deg)' },
					'40%': { transform: 'rotate(-4deg)' },
					'50%': { transform: 'rotate(10.0deg)' },
					'60%': { transform: 'rotate(0.0deg)' },
					'100%': { transform: 'rotate(0.0deg)' },
				},
				slide: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			animation: {
				'waving-hand': 'wave 2s linear forwards',
				slide: 'slide .5s linear forwards',
			},
		},
	},
	plugins: [],
}
