import './style.scss'

const FilterBlock = () => {
  return (
    <div className='filter-block'>
      <div className='filter-block__wrapper'>
        <button>Сначала популярные</button>
        <button>Выбрать уровень</button>
      </div>
      <button>Выбрать хэштеги</button>
    </div>
  )
}

export default FilterBlock
