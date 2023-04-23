import profilePic from '../img/profilePic.JPG'

function Home() {
    return (
        <div className="homepage">
            <h1>JUNYA ISHIDA</h1>
            <div className="shortProfile">
                <div className='profilePicContainer'>
                    <img className='profilePicture' src={profilePic}/>
                </div>

                <div className='profileInfo'>
                Junya Ishida is a highly experienced personal trainer with over 10 years of experience in the fitness industry. With a focus on helping his clients achieve their fitness goals, Junya has helped countless individuals improve their overall health and wellness. <br/><br/>

                Junya has built a reputation as a specialist in:
                <ul>
                    <li>Strength training</li>
                    <li>Cardio</li>
                    <li>Muay Thai & Boxing</li>
                    <li>Weight Loss</li>
                </ul>
                
                In addition to his extensive experience in personal training, Junya is also a 2-time WKA East Coast Muay Thai Champion. This achievement showcases his dedication and passion for martial arts and his ability to train and compete at a high level.<br/><br/>

                With his expertise and proven track record, Junya Ishida is a sought-after personal trainer who can help individuals of all fitness levels reach their full potential.<br/>
                </div>
            </div>

            <h1>HOW I CAN HELP YOU</h1>
            <div className="skillsContainer">
                
                <div className="skill">
                    <h3>Strength Training</h3>
                    Building strength is an essential part of achieving your fitness goals. Whether you're looking to lose weight, tone your muscles, or improve your overall health, strength training is a key component of any successful fitness program. <br/><br/>

                    Through my years of experience, I have developed a specialized strength training program that is designed to help clients of all fitness levels build muscle and improve their overall strength. My program includes a range of exercises that target different muscle groups and can be tailored to meet each client's unique needs and fitness goals.
                </div>
                <div className="skill">
                    <h3>Cardio</h3>
                    Cardio exercise is an essential part of maintaining a healthy lifestyle. Not only does it improve your cardiovascular health, but it can also help you lose weight, increase your energy, and reduce your risk of chronic disease. <br/><br/>

                    With my years of experience, I have developed a specialized cardio program that is designed to help clients of all fitness levels improve their endurance, speed, and agility. <br/><br/>

                    Whether you're a beginner or an experienced athlete, I can help you take your cardio fitness to the next level with my personalized program.<br/>
                </div>
                <div className="skill">
                    <h3>Muay Thai and Boxing</h3>
                    I am a former 2x WKA East Coast Muay Thai Champion and am fully qualified as a Muay Thai coach, with over a decade of experience.<br/><br/>

                    Having won two titles in my fight career, I understand what it takes to succeed as a fighter, both physically and mentally. Whether your goal is to become a competitive fighter, improve your fitness level, or simply learn the art of Muay Thai, I am here to help you achieve success. <br/><br/>

                    Boxing is not just a physical sport, but also a mental one. Through my training program, I aim to help clients develop the mental toughness, discipline, and focus that are required to succeed in boxing, and in life. <br/>
                </div>
                <div className="skill">
                    <h3>Weight Loss</h3>
                    With years of experience and a passion for helping clients achieve their health and fitness goals, I will be your ultimate guide on your weight loss journey. <br/><br/>

                    Whether you're just starting out or have been struggling to shed those extra pounds, our personalized training programs are tailored to your unique needs and are designed to maximize your results.<br/>
                </div>
            </div>
            <h1>CLIENT TESTIMONIALS</h1>
            <div className="clientTestimonials">
                
                Client testimonials here
            </div>
        </div>
    )
}

export default Home