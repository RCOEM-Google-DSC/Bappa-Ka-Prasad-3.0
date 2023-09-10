import leaderboard from '/leaderboard.svg';
export default function LeaderBoardSection() {
  return (
    <div>
      <p className='mid-section-title text-center text-lg mt-16 mb-12 sm:text-xl sm:mt-12 sm:mb-16 sm:mt-0 md:text-2xl lg:text-5xl lg:mt-16 lg:mb-20'>Global Leaderboard 2022</p>
      <img className='w-[1000px]' src={leaderboard} alt="Leaderboard"/>
    </div>
  );
}