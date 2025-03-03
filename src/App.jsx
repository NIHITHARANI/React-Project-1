
import './App.css'

function App() {

  return (
    <>
      <nav>
			<h2>explor<span>er</span></h2>
			<ul>
				<li>Hotels</li>
				<li>Bike Rentals</li>
				<li>Restaurants</li>
			</ul>
		</nav>
		<section className="hero">
			<article>
				<div className="hero-text">
					<h3>WELCOME TO EXPLORER</h3>
					<h1>
						Your Adventure Travel Expert in the <span className="bold">SOUTH</span>
					</h1>
				</div>
				<form action="">
					<select className="locations-drop" name="locations" id="locations">
						<option value="choose">Choose</option>
						<option value="Chennai">Chennai</option>
						<option value="Bengaluru">Bengaluru</option>
					</select>
					<button className="btn">EXPLORE</button>
				</form>
			</article>
			<figure>
				<img src="image-1.jpg" alt="A photo of a cyclist" />
			</figure>
		</section>
		<section className="destinations">
			<h2>Destinations</h2>
			<p className="sub">
				Just for you. Because you and your bike are special to us!
			</p>
			<div className="dest-grid">
				<article className="about-dest">
					<figure className="dest-img">
						<img
							src="image-2.png"
							alt="A scenary of nature"
						/>
					</figure>
					<div className="dest-header">
						<h2 className="dest-title">
							Never Ending Paddy Fields and Narrow Roads
						</h2>
						<p className="dest-sub">Pollachi</p>
					</div>
					<p className="dest-desc">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
						a, nesciunt explicabo dolor nisi similique molestiae deserunt
						consequatur laudantium velit quos quisquam quia, necessitatibus
						reiciendis doloremque ex mollitia laboriosam tempore quas expedita
						perspiciatis libero dolorum consectetur. Labore, soluta error.
						Architecto porro perferendis dolorum dolore, perspiciatis tempore
						dolores suscipit aut, accusamus rem fugiat voluptas doloribus
						ducimus voluptatem asperiores repudiandae, eligendi saepe quae vero
						aliquam soluta maxime sit harum expedita?
					</p>
					<button className="btn">READ MORE</button>
				</article>
				<article className="about-dest">
					<figure className="dest-img">
						<img
							src="image-3.png"
							alt="A scenary of nature"
						/>
					</figure>
					<div className="dest-header">
						<h2 className="dest-title">
							Never Ending Paddy Fields and Narrow Roads
						</h2>
						<p className="dest-sub">Pollachi</p>
					</div>
					<p className="dest-desc">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
						a, nesciunt explicabo dolor nisi similique molestiae deserunt
						consequatur laudantium velit quos quisquam quia, necessitatibus
						reiciendis doloremque ex mollitia laboriosam tempore quas expedita
						perspiciatis libero dolorum consectetur. Labore, soluta error.
						Architecto porro perferendis dolorum dolore, perspiciatis tempore
						dolores suscipit aut, accusamus rem fugiat voluptas doloribus
						ducimus voluptatem asperiores repudiandae, eligendi saepe quae vero
						aliquam soluta maxime sit harum expedita?
					</p>
					<button className="btn">READ MORE</button>
				</article>
				<article className="about-dest">
					<figure className="dest-img">
						<img
							src="image-4.png"
							alt="A scenary of nature"
						/>
					</figure>
					<div className="dest-header">
						<h2 className="dest-title">
							Never Ending Paddy Fields and Narrow Roads
						</h2>
						<p className="dest-sub">Pollachi</p>
					</div>
					<p className="dest-desc">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
						a, nesciunt explicabo dolor nisi similique molestiae deserunt
						consequatur laudantium velit quos quisquam quia, necessitatibus
						reiciendis doloremque ex mollitia laboriosam tempore quas expedita
						perspiciatis libero dolorum consectetur. Labore, soluta error.
						Architecto porro perferendis dolorum dolore, perspiciatis tempore
						dolores suscipit aut, accusamus rem fugiat voluptas doloribus
						ducimus voluptatem asperiores repudiandae, eligendi saepe quae vero
						aliquam soluta maxime sit harum expedita?
					</p>
					<button className="btn">READ MORE</button>
				</article>
				<article className="about-dest">
					<figure className="dest-img">
						<img
							src="image-5.png"
							alt="A scenary of nature"
						/>
					</figure>
					<div className="dest-header">
						<h2 className="dest-title">
							Never Ending Paddy Fields and Narrow Roads
						</h2>
						<p className="dest-sub">Pollachi</p>
					</div>
					<p className="dest-desc">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
						a, nesciunt explicabo dolor nisi similique molestiae deserunt
						consequatur laudantium velit quos quisquam quia, necessitatibus
						reiciendis doloremque ex mollitia laboriosam tempore quas expedita
						perspiciatis libero dolorum consectetur. Labore, soluta error.
						Architecto porro perferendis dolorum dolore, perspiciatis tempore
						dolores suscipit aut, accusamus rem fugiat voluptas doloribus
						ducimus voluptatem asperiores repudiandae, eligendi saepe quae vero
						aliquam soluta maxime sit harum expedita?
					</p>
					<button className="btn">READ MORE</button>
				</article>
				<article className="about-dest">
					<figure className="dest-img">
						<img
							src="image-6.png"
							alt="A scenary of nature"
						/>
					</figure>
					<div className="dest-header">
						<h2 className="dest-title">
							Never Ending Paddy Fields and Narrow Roads
						</h2>
						<p className="dest-sub">Pollachi</p>
					</div>
					<p className="dest-desc">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
						a, nesciunt explicabo dolor nisi similique molestiae deserunt
						consequatur laudantium velit quos quisquam quia, necessitatibus
						reiciendis doloremque ex mollitia laboriosam tempore quas expedita
						perspiciatis libero dolorum consectetur. Labore, soluta error.
						Architecto porro perferendis dolorum dolore, perspiciatis tempore
						dolores suscipit aut, accusamus rem fugiat voluptas doloribus
						ducimus voluptatem asperiores repudiandae, eligendi saepe quae vero
						aliquam soluta maxime sit harum expedita?
					</p>
					<button className="btn">READ MORE</button>
				</article>
				<article className="about-dest">
					<figure className="dest-img">
						<img
							src="image-7.png"
							alt="A scenary of nature"
						/>
					</figure>
					<div className="dest-header">
						<h2 className="dest-title">
							Never Ending Paddy Fields and Narrow Roads
						</h2>
						<p className="dest-sub">Pollachi</p>
					</div>
					<p className="dest-desc">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
						a, nesciunt explicabo dolor nisi similique molestiae deserunt
						consequatur laudantium velit quos quisquam quia, necessitatibus
						reiciendis doloremque ex mollitia laboriosam tempore quas expedita
						perspiciatis libero dolorum consectetur. Labore, soluta error.
						Architecto porro perferendis dolorum dolore, perspiciatis tempore
						dolores suscipit aut, accusamus rem fugiat voluptas doloribus
						ducimus voluptatem asperiores repudiandae, eligendi saepe quae vero
						aliquam soluta maxime sit harum expedita?
					</p>
					<button className="btn">READ MORE</button>
				</article>
			</div>
		</section>
		<section className="contact">
			<div>
				<h2>Contact Us</h2>
				<p className="sub">Our Sales Team will reach out to you ASAP!</p>
				<form action="">
					<div className="form-element">
						<label htmlFor="name">Name</label>
						<input type="text" name="name" id="name" />
					</div>
					<div className="form-element">
						<label htmlFor="home-town">Your Home Town</label>
						<select name="home-town" id="home-town">
							<option value="Chennai">Chennai</option>
							<option value="Bengaluru">Bengaluru</option>
							<option value="Madurai">Madurai</option>
						</select>
					</div>
					<div className="form-element">
						<label htmlFor="dest-state">Where would you like to go?</label>
						<select name="dest-state" id="dest-state">
							<option value="choose">Choose</option>
							<option value="Goa">Goa</option>
							<option value="Ooty">Ooty</option>
							<option value="Kodaikanal">Kodaikanal</option>
						</select>
					</div>
					<div className="form-element">
						<label htmlFor="phone">Contact Number</label>
						<input type="number" name="phone" id="phone" />
					</div>
					<button className="btn">SUBMIT INTEREST</button>
				</form>
			</div>
		</section>
    </>
  )
}

export default App
