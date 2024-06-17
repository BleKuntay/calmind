import { NavLink } from 'react-router-dom';
import FeatureCard from '../components/FeaturesCard';

const Home = () => {
  return (
		<>
			{/* Bagian 1 */}
			<div className="min-h-screen bg-[#118AB2] flex flex-col justify-center">
				<div className="container mx-auto bg-[#118AB2]">
					<div className="flex flex-col items-start gap-5 text-white w-[455px] bg-[#118AB2]">
						<h2 className="text-[55px] font-bold mb-4 bg-[#118AB2]">Embark on Your Mental Health Journey</h2>
						<NavLink to="/talk-mind">
							<button className="w-[170px] text-[25px] py-2 bg-[#0AD69F] hover:bg-emerald-500 rounded justify-start">
								START HERE
							</button>
						</NavLink>
					</div>
					<div className="relative mt-8">
						<img 
							src="src/assets/home-image1.png" 
							alt="Home" 
							className="absolute w-[745px] h-auto top-[-600px] right-[-140px] bg-transparent"
						/>
					</div>
				</div>
			</div>
			{/* About Us */}
			<div className="min-h-screen bg-white text-white flex flex-col justify-start items-center">
				<h2 className='bg-inherit text-[#118AB2] font-bold text-[50px] py-16'>About Us</h2>
				<div className='flex flex-row justify-between gap-5 w-screen bg-inherit'>
					<div className='flex flex-col gap-4 w-[488px] ml-28 mt-7 bg-transparent text-black'>
						<h3 className='bg-inherit text-[35px] font-bold'>CALMIND</h3>
						<p className='bg-inherit text-[25px]'>Greetings from CALMIND, your go-to resource for mental health. We are committed to offering a welcoming, helpful online environment where you can improve your mental health via expert therapy, motivational feedback, and community interaction.</p>
					</div>
					<div className='relative bg-inherit'>
						<img src="src\assets\home-image2.png" alt="" className='w-[750px] bg-inherit'/>
					</div>
				</div>
			</div>			
			{/* Features */}
			<div className="h-[670px] bg-[#DBEDF3] flex flex-col items-center justify-start p-16">
				<h2 className='text-[#118AB2] bg-inherit text-[50px] font-bold '>Features</h2>
				<FeatureCard />
			</div>
		</>
  );
}

export default Home;
