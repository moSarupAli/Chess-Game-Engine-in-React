import { getCharacter } from '../../../helper'
import './Files.css'

const Files = ({files}) => {
  return (
    <div className='files'>
      {files.map((file, i) => <span key={i}>{getCharacter(file)}</span> )}
    </div>
  )
}

export default Files