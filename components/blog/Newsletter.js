import cn from "classnames";

const Newsletter = ({ className }) => {
  return (
    <div className={cn(className, "bg-stone flex items-center gap-12 px-16 py-12")}>
      <div>
        <h2 className="text-2xl font-semibold">Never miss a beat</h2>
        <p className="text-gray-secondary mt-2">
          Subscribe to our newsletter for the latest tips in achieving your peak performance.
        </p>
      </div>
      <div>
        <h3>Subscribe to our newsletter</h3>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
        <p>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</p>
      </div>
    </div>
  );
};

export default Newsletter;
