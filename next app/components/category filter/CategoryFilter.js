import React, {useState} from 'react'
import styles from './CategoryFilter.module.scss'

const CategoryFilter = ({categoryFilter}) => {


    const [category, setCategory] = useState('');

    const categories = ['Select','Entertainment', 'Education', 'Sports', 'Concert', 'International']


    const changeHandler = (e) => {
        setCategory(e.target.value)
        categoryFilter(e.target.value)
    }


  return (
    <div>
        <div className = {styles["category-filter"]}>

                <div className={styles.label}>Select Category</div>

                <select required
                onChange={changeHandler}
                className = {styles.input} 
                >

                {
                    categories.map(x => (
                        <option className = {styles.option}>{x}</option>
                    ))
                } 
                </select>                 


                </div>
    </div>
  )
}

export default CategoryFilter