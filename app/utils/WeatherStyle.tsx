export const weatherStyles: { [key: string]: any} = {
    Clear: {
      backgroundColor: 'bg-blue-500',
      textColor: 'text-white',
      image: '/weather/sunny.png', // Path to your clear weather image
    },
    Sunny: {
        backgroundColor: 'bg-blue-500',
        textColor: 'text-white',
        image: '/weather/sunny.png', // Path to your clear weather image
    },
    Clouds: {
      backgroundColor: 'bg-gray-300',
      textColor: 'text-black',
      image: '/weather/cloud.png', // Path to your clouds weather image
    },
    Rain: {
      backgroundColor: 'bg-blue-900',
      textColor: 'text-white',
      image: '/weather/rain.png', // Path to your rain weather image
    },
    Snow: {
      backgroundColor: 'bg-gray-300',
      textColor: 'text-black',
      image: '/weather/snow.png', // Path to your snow weather image
    },
    Drizzle: {
        backgroundColor: 'bg-blue-300',
        textColor: 'text-black',
        image: '/weather/drizzle.png', // Path to your snow weather image
      },
    // Add more conditions as needed
  };
  
  export const getWeatherStyle = (condition:string) => {
    return weatherStyles[condition] || weatherStyles['Clear'];
  };