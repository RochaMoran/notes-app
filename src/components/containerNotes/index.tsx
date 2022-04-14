import './styles.css'
import { MdEventNote } from 'react-icons/md'
import { AiOutlineFilter } from 'react-icons/ai'
import Note from '../note';

export default function ContainerNotes() {
  return (
    <div className="px-3.5 bg-slate-800 container-notes overflow-auto">
      <div className='mt-3.5 font-bold text-white flex items-center text-xl border-b-2'>
        <h2>Notas</h2>
        <MdEventNote className='ml-2'/>
      </div>
      <div className='my-3.5 flex justify-between text-white border-b border-slate-600 py-1'>
        4 notas encontradas
        <div>
          <button>
            <AiOutlineFilter />
          </button>
        </div>
      </div>
      <div>
        <Note title="Mi nota Bonita" description="Una nota super cool creada por alguien cool 😊💕" date="12/10/22" priority="low" />
        <Note title="Segunda nota" description="Una nota super cool creada por alguien cool 😊💕" date="10/05/21" priority="medium" />
      </div>
    </div>
  );
}
