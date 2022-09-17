
const App = () => {

  const categories = [
    {
      id: '1',
      title: 'Hats',
      imageUrl: '#'
    },
    {
      id: '2',
      title: 'Jackets',
      imageUrl: '#'
    },
    {
      id: '3',
      title: 'Sneakers',
      imageUrl: '#'
    },
    {
      id: '4',
      title: 'Womens',
      imageUrl: '#'
    },
    {
      id: '5',
      title: 'Mens',
      imageUrl: '#'
    }
  ]


  return (
    <div className="categories-container">
      {categories.map(({ id, imageUrl, title }) => 
          (
          <div key={id} className="category-container">
            <img src={imageUrl} alt={`${title} Category`} />
            <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
            </div>
        </div>)
      )}
    </div>
  );
}

export default App;
