import '../../styles/layout/FilterStudent.scss'

function FilterStudent({ isStudentP, handleRadioStudentLift }) {

  const handleRadioStudent = (ev) => {
    handleRadioStudentLift(ev.target.id)
  }

  return (
    <fieldset>
      <legend className='student'>Show current students:</legend>
      <label htmlFor="all" className='student__label'> Show all
        <input type="radio" name="all" id="all" checked={isStudentP === 'all'}
          onChange={handleRadioStudent}
        />
      </label>
      <label htmlFor="yes" className='student__label'> Students
        <input type="radio" name="yes" id="yes"
          checked={isStudentP === 'yes'}
          onChange={handleRadioStudent} />
      </label>
      <label htmlFor="no" className='student__label'> No students
        <input type="radio" name="student" id="no" checked={isStudentP === 'no'}
          onChange={handleRadioStudent} />
      </label>
    </fieldset>
  )
}
export default FilterStudent;