import ForgetPasswordFrom from './ForgetPasswordFrom';

interface Order {
    orderID: string;
    ProductID: string;
    ProductName: string;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  mobile: string;
  type: string;
  password: string;
  profilePic: string;
  term: string; // or number if it's numeric
  orders : Order[];
}

export function ForgetPassword() {


  return (
    <div className="flex flex-col w-full min-h-screen relative auth-container">
      {/* Background with dark theme */}
      <div className="absolute inset-0 bg-cover bg-center z-0 opacity-90" style={{
      backgroundImage: `url(https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 bg-black/85"></div>
      </div>
      {/* Content container with hidden scrollbar */}
      <div className="flex flex-col w-full items-center justify-center z-10 px-6 py-12 md:px-12 relative overflow-auto auth-scrollbar h-screen" style={{
      scrollbarWidth: 'none',
      msOverflowStyle: 'none' /* IE and Edge */
    }}>
        
        {/* True glass morphism form with more transparency */}
        <div className="w-full max-w-md p-8 rounded-lg text-white" style={{
          backgroundColor: 'rgba(17, 25, 40, 0.25)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.125)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
        }}>
          <ForgetPasswordFrom/>
          
        </div>
      </div>
      
    </div>
  )
}