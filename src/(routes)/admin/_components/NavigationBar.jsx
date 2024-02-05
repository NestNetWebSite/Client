import { Link } from 'react-router-dom';

/**
 * 관리자 페이지 네비게이션바 (상단, 좌측)
 * @returns
 */
export default function NavigationBar() {
    const adminLinks = [
        {
            title: '사용자관리',
            link: 'users',
        },
    ];

    return (
        <>
            <div className='fixed top-0 z-20 flex h-20 w-full flex-row bg-secondary'>
                <h1 className='my-auto ml-8 text-2xl font-semibold text-white'>관리자 페이지</h1>
            </div>
            <section className='overflow-y-screen fixed left-0 z-10 h-screen max-h-screen w-[14rem] border-r-2 border-[#D9D9D9] pt-[5rem]'>
                <ul>
                    {adminLinks.map((item, idx) => (
                        <li key={idx} className={`h-fit w-full border-b-2 bg-white p-5 text-center`}>
                            <Link to={item.link}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}