import React, { useState } from 'react'
import search_icon from "../assets/search_icon.png"


import pluginData from "../data/pluginData";

const FilterPlugins = () => {

    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');

    const onChangeHandler = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
        // console.log(e.target.value)
    }

    const searchItem = pluginData.filter((item) => {
        if (search == "") {
            return item
        }

        else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
        }
    })
    // console.log(searchItem);
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const filteredPlugins = category === 'All' ? pluginData : pluginData.filter((plugin) => plugin.category === category);
    console.log(filteredPlugins)


    return (
        <>
            {/* for small Devices */}
            <div  className='pt-[100px] md:hidden block xl:px-44 md:px-16 px-6 lg:h-[745px] md:h-[860px]' >
                <div className='bg-white sticky pt-[20px] pb-[10px] top-[75px]'>
                    <div className='text-[24px] leading-[32px] text-[#1a181e]   bg-white font-[600]'>
                        All Plugins
                    </div>
                    <div className='plugin_search  bg-white'>
                        <form>
                            <div className='form_css items-center flex pt-[15px] w-full '>
                                <img src={search_icon} alt="Search Icon" className="h-[18px] w-[18px] left-[20px] absolute" />

                                <input className='indent-[38px] border-[#e6e6e6] px-[10px] py-[15px] border-2 w-full placeholder:text-[16px] rounded-lg' value={search} onChange={onChangeHandler} type="text" placeholder='Search for plugins...' />
                            </div>
                        </form>
                    </div>
                </div>
                {
                    searchItem.map((item, id) => {
                        return (
                            <div key={id} className='border-[#e6e6e6] flex justify-start shrink basis-full mt-[15px] px-[12px] py-[12px] border rounded-lg'>
                                <div className='flex justify-between'>
                                    <div>
                                        <img className='h-[56px] rounded-md w-[56px]' src={item.image} alt="no_image" />
                                    </div>
                                    <div className='max-w-[80%] pl-[10px]'>
                                        <h1 className='text-[18px] fontFamily leading-[24px] font-[500]'>{item.name}</h1>
                                        <div className='text-[15px] pt-[2px] text-[#4d4d4d] leading-[20px] font-[400]'>{item.description}</div>
                                        <button className='mt-[16px] text-white bg-[#146eb4] text-[16px] leading-[24px] font-[500] px-[16px] py-[8px] border-[1px] rounded-md border-[#1463b4]'>Install plugin</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div >


            {/* For large devices */}


            <div className='pt-[200px] md:block hidden xl:px-44 md:px-16 px-6 '>
                <div className='flex '>
                    <div className='min-w-fit pr-[70px]  '>
                        <div className='text-[36px] leading-[42px] sticky top-[200px] text-[#1a181e] bg-white font-[700]'>All Plugins</div>
                        <div className='pt-[20px] sticky top-[230px] '>
                            <div className=''>
                                <input
                                    type="radio"
                                    id="category_all"
                                    value="All"
                                    checked={category === 'All'}
                                    onChange={handleCategoryChange}
                                />
                                <label className='text-[18px] pt-[2px] leading-[26px] text-[#1a181e] ml-[8px]' htmlFor="category_all">All</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="category_analytics"
                                    value="Analytics"
                                    checked={category === 'Analytics'}
                                    onChange={handleCategoryChange}
                                />
                                <label className='text-[18px] pt-[2px] leading-[26px] text-[#1a181e] ml-[8px]' htmlFor="category_analytics">Analytics</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="category_customer_support"
                                    value="Customer Support"
                                    checked={category === 'Customer Support'}
                                    onChange={handleCategoryChange}
                                />
                                <label className='text-[18px] pt-[2px] leading-[26px] text-[#1a181e] ml-[8px]' htmlFor="category_customer_support">Customer Support</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="category_marketing"
                                    value="Marketing"
                                    checked={category === 'Marketing'}
                                    onChange={handleCategoryChange}
                                />
                                <label className='text-[18px] pt-[2px] leading-[26px] text-[#1a181e] ml-[8px]' htmlFor="category_marketing">Marketing</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="category_others"
                                    value="Others"
                                    checked={category === 'Others'}
                                    onChange={handleCategoryChange}
                                />
                                <label className='text-[18px] pt-[2px] leading-[26px] text-[#1a181e] ml-[8px]' htmlFor="category_others">Others</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="category_utilities"
                                    value="Utilities"
                                    checked={category === 'Utilities'}
                                    onChange={handleCategoryChange}
                                />
                                <label className='text-[18px] pt-[2px] leading-[26px] text-[#1a181e] ml-[8px]' htmlFor="category_utilities">Utilities</label>
                            </div>
                        </div>
                    </div>

                    <div>

                        <div className='plugin_search  bg-white'>
                            <form>
                                <div className='form_css items-center flex pt-[15px] w-full '>
                                    <img src={search_icon} alt="Search Icon" className="h-[18px] w-[18px] left-[32px] relative" />

                                    <input className='indent-[38px] border-[#e6e6e6] px-[10px] py-[15px] border-2 w-full placeholder:text-[16px] rounded-lg' value={search} onChange={onChangeHandler} type="text" placeholder='Search for plugins...' />
                                </div>
                            </form>
                        </div>

                        <div className='flex flex-wrap'>
                            {search == '' ? (
                                filteredPlugins.map((item, key) => {
                                    return (
                                        <div key={key} className='border-[#e6e6e6] ml-[13px] flex shrink lg:basis-[48%]  justify-start mt-[15px] px-[12px] py-[12px] border rounded-lg'>
                                            <div className='flex justify-between'>
                                                <div>
                                                    <img className='h-[56px] rounded-md w-[56px]' src={item.image} alt="no_image" />
                                                </div>
                                                <div className='max-w-[80%] pl-[10px]'>
                                                    <h1 className='text-[18px] fontFamily leading-[24px] font-[500]'>{item.name}</h1>
                                                    <div className='text-[15px] pt-[2px] text-[#4d4d4d] leading-[20px] font-[400]'>{item.description}</div>
                                                    <button className='mt-[16px] text-white bg-[#146eb4] text-[16px] leading-[24px] font-[500] px-[16px] py-[8px] border-[1px] rounded-md border-[#1463b4]'>Install plugin</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                searchItem.map((item, id) => {
                                    return (
                                        <div key={id} className='border-[#e6e6e6] flex justify-start shrink basis-full mt-[15px] px-[12px] py-[12px] border rounded-lg'>
                                            <div className='flex justify-between'>
                                                <div>
                                                    <img className='h-[56px] rounded-md w-[56px]' src={item.image} alt="no_image" />
                                                </div>
                                                <div className='max-w-[80%] pl-[10px]'>
                                                    <h1 className='text-[18px] fontFamily leading-[24px] font-[500]'>{item.name}</h1>
                                                    <div className='text-[15px] pt-[2px] text-[#4d4d4d] leading-[20px] font-[400]'>{item.description}</div>
                                                    <button className='mt-[16px] text-white bg-[#146eb4] text-[16px] leading-[24px] font-[500] px-[16px] py-[8px] border-[1px] rounded-md border-[#1463b4]'>Install plugin</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            )}


                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default FilterPlugins









