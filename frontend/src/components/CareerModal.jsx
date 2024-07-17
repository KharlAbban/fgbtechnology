import { Link } from 'react-router-dom'

const CareerModal = () => {
  return (
    <dialog id='careerModal' className='modal modal-bottom sm:modal-middle rounded-none text-base'>
        <div className='modal-box bg-white rounded-none'>
            <h3 className='font-semibold text-xl'>Yes! We'd love to have you with us!</h3>
            <p className='py-4'>Send your CV and letter to <span className='text-secondaryBlue underline'>sales@fgbtechnology.com</span>, or <Link className='text-secondaryBlue underline' to="/contact">contact us</Link> using the forms all over the website.</p>
            <br />
            <div className='modal-action'>
                <form method='dialog'>
                    <button className='underline'>Close</button>
                </form>
            </div>
        </div>
    </dialog>
  )
}

export default CareerModal