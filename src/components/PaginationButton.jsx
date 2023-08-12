import React from 'react'

const PaginationButton = ({loading,setLoading,checkLoad}) => {
    const barStyle="hidden w-5 h-5 animate-spin text-indigo-500";
    const activeBarStyle="w-5 h-5 animate-spin text-indigo-500";
  return (
    <div>

        {checkLoad&&(
            <div id="pagination-button" className="flex justify-center mt-14">
              <button 
              name="button" 
              type="button" 
              className="inline-flex items-center justify-center px-8 h-12 text-base font-medium text-indigo-700 border border-transparent rounded-2xl bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500" 
              target="_blank" 
              onClick={()=>{

                setLoading(true);
              }}
              >
                <svg className={loading?activeBarStyle:barStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Загрузить еще</span>
              </button>  
            </div>
          )}

    </div>
  )
}

export default PaginationButton