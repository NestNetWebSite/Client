import { useNavigate } from 'react-router-dom';

// @ts-ignore
export default function NetworkErrorPage({ retry }) {
    const navigate = useNavigate();

    return (
        <div className={'flex h-[calc(100dvh-4.68rem)] w-full flex-col items-center justify-center gap-y-5'}>
            <span className={'w-full text-center font-bold'}>인터넷 연결이 원활하지 않습니다. 다시 시도해주세요.</span>
            <div className={'flex gap-x-5'}>
                <button
                    className={
                        'rounded-xl border border-rose-700 px-4 py-3 font-bold text-rose-700 transition-all hover:bg-red-50'
                    }
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    메인으로
                </button>
                <button
                    className={
                        'rounded-xl border border-rose-700 bg-rose-700 px-4 py-3 font-bold text-white transition-all hover:bg-rose-900'
                    }
                    onClick={() => {
                        retry();
                    }}
                >
                    다시 시도
                </button>
            </div>
        </div>
    );
}
