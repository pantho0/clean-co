import introImg from "../assets/images/intro.jpg";
import Container from "../components/ui/Container";

const Home = () => {
  return (
    <Container>
      <div className="flex my-20 gap-4">
        <div className="flex-1 flex flex-col justify-evenly">
          <div>
            <h1 className="text-7xl font-bold">Quality Cleaning <br /> <span className="text-primary">For Your Home</span></h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              ex corporis? Assumenda perspiciatis nisi, vel nobis harum ullam
              fugiat! Molestias.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="btn btn-primary">Book a service</button>
            <button className="btn btn-ghost">Read More</button>
          </div>
          <div className="divider">
          </div>
          <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
        </div>
        <div className="flex-1">
          <img src={introImg} className="w-full h-full object-cover rounded-md" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Home;
