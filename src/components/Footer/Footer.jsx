const Footer = () => {
  return (
    <div>
      <div className="container lg:flex lg:justify-between lg:space-x-4 mt-10">
        <div className="lg:w-1/4">
        <h3 className="mb-8 text-xl">
              </h3>
        <div className="text-gray-500">Get the breathing space now, and we’ll extend your term at the other end year for go.
              </div>
        </div>
          <div className="lg:w-1/4">
              <h3 className="mb-8 text-xl">Book Category
              </h3>
              <div className="flex flex-col space-y-4">
                  <div>
                      <a className="hover:underline text-gray-500" href="">
                          History
                      </a>
                  </div>
                  <div>
                      <a className="hover:underline text-gray-500" href="">
                          Horror - Thriller
                      </a>
                  </div>
                  <div>
                      <a className="hover:underline text-gray-500" href="">
                      Love Stories
                      </a>
                  </div>
                  <div>
                      <a className="hover:underline text-gray-500" href="">
                      Science Fiction
                      </a>
                  </div>
                  <div>
                      <a className="hover:underline text-gray-500" href="">
                      Business
                      </a>
                  </div>
              </div>
          </div>

          <div className="lg:w-1/4 mt-[60px]">
              <div className="flex flex-col space-y-4">
                  <div>
                      <a className="hover:underline text-gray-500" href="">
                      Biography
                      </a>
                  </div>
                  <div>
                      <a className="hover:underline text-gray-500" href="">
                      Astrology
                      </a>
                  </div>
                  <div>
                      <a className="hover:underline text-gray-500" href="">
                      Digital Marketing
                      </a>
                  </div>
                  <div>
                      <a className="hover:underline text-gray-500" href="">
                      Software Development
                      </a>
                  </div>
                  <div>
                      <a className="hover:underline text-gray-500" href="">
                      Ecommerce
                      </a>
                  </div>
              </div>
          </div>

          <div className="lg:w-1/4">
              <h3 className="mb-8 text-xl">
              Site Map
              </h3>
              <div className="flex flex-col space-y-4">
                  <div>
                      <a className="hover:underline text-gray-500" href="">
                      Home
                      </a>
                  </div>
                  <div>
                      <a className="hover:underline text-gray-500" href="">
                      About Us
                      </a>
                  </div>
                  <div>
                      <a className="hover:underline text-gray-500" href="">
                      FAQs
                      </a>
                  </div>
                  <div>
                      <a className="hover:underline text-gray-500" href="">
                      Blog
                      </a>
                  </div>
                  <div>
                      <a className="hover:underline text-gray-500" href="">
                      Contact
                      </a>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-6 border-t border-light bg-primary/50 py-6 text-center text-sm">
      Copyright ©2022 All rights reserved | wyl@gmail.com
      </div>
    </div>
  )
}

export default Footer