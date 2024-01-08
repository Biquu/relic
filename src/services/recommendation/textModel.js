import getRecommendations from './path/to/getRecommendations';

async function testModel() {
  try {
    const recommendations = await getRecommendations('user1');
    console.log('Recommendations:', recommendations);
  } catch (error) {
    console.error('Error:', error);
  }
}

testModel();
