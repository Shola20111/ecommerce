// "use client";

// import React, { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// interface AuthContextType {
//   user: any;
//   setUser: any;
//   loading:any;
//   token: string | null;
//   login: (formData: any) => Promise<void>;
//   register: (formData: any) => Promise<void>;
//   updateUserProfile:(formData: any) => Promise<void>;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | null>(null);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const router = useRouter();
//   const [user, setUser] = useState<any>(null);
//   const [token, setToken] = useState<string | null>(null);
//   const [loading, setLoading] = useState()

//   // Auto-load user if token exists
//   useEffect(() => {
//     const savedToken = localStorage.getItem("token");
//     if (!savedToken) return;

//     setToken(savedToken);

//     axios
//       .get("http://localhost:5000/api/users/me", {
//         headers: { Authorization: `Bearer ${savedToken}` },
//       })
//       .then((res) => setUser(res.data.user))
//       .catch(() => {
//         setUser(null);
//         localStorage.removeItem("token");
//       });
//   }, []);

//   const login = async (formData: any) => {
//     const res = await axios.post("http://localhost:5000/api/users/login", formData);
//     const { user, token } = res.data;
//     localStorage.setItem("token", token);
//     localStorage.setItem("userId", user._id); 
//     setToken(token);
//     setUser(user);
//     router.push("/myAccount");
//   };

//   const register = async (formData: any) => {
//     const res = await axios.post("http://localhost:5000/api/users/register", formData);
//     const { user, token } = res.data;
//     localStorage.setItem("token", token);
//     setToken(token);
//     setUser(user);
//     router.push("/myAccount");
//   };

//   const updateUserProfile = async (formData: any) => {
//   try {
//     if (!user?._id) {
//       throw new Error("User ID missing");
//     }

//     const res = await axios.put(
//       `http://localhost:5000/api/users/updateUser/${user._id}`,
//       formData,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     // Update frontend state
//     setUser(res.data.updatedUser);
//     setToken(res.data.token);

//     localStorage.setItem("token", res.data.token);
//     localStorage.setItem("user", JSON.stringify(res.data.updatedUser));

//     return res.data.updatedUser;

//   } catch (error) {
//     console.log("Update Error:", error);
//     throw error;
//   }
// };




//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//     setUser(null);
//     router.push("/login");
//   };

//   return (
//     <AuthContext.Provider value={{ user, setUser, loading, token, login, register,updateUserProfile, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const ctx = useContext(AuthContext);
//   if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
//   return ctx;
// };


"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: any;
  token: string | null;
  loading: boolean;
  setUser: (u: any) => void;
  login: (formData: any) => Promise<void>;
  register: (formData: any) => Promise<void>;
  updateUserProfile: (formData: any) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Auto-load user and token
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (!savedToken) {
      setLoading(false);
      return;
    }

    setToken(savedToken);

    axios
      .get("http://localhost:5000/api/users/me", {
        headers: { Authorization: `Bearer ${savedToken}` },
      })
      .then((res) => setUser(res.data.user))
      .catch(() => {
        localStorage.removeItem("token");
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (formData: any) => {
    const res = await axios.post("http://localhost:5000/api/users/login", formData);

    const { user, token } = res.data;

    localStorage.setItem("token", token);
    setToken(token);
    setUser(user);

    router.push("/myAccount");
  };

  const register = async (formData: any) => {
    const res = await axios.post("http://localhost:5000/api/users/register", formData);

    const { user, token } = res.data;

    localStorage.setItem("token", token);
    setToken(token);
    setUser(user);

    router.push("/myAccount");
  };

  // const updateUserProfile = async (formData: any) => {
    
  //   console.log(user?._id)
    
    
    
  //   if (!user?._id) throw new Error("User ID missing");

  //   const res = await axios.put(
  //     `http://localhost:5000/api/users/updateUser/${user?._id}`,
  //     formData,
  //     {
  //       headers: { Authorization: `Bearer ${token}` },
  //     }
  //   );

  //   const updatedUser = res.data.updatedUser;

  //   // update state globally
  //   setUser(updatedUser);

  //   // update token if given
  //   if (res.data.token) {
  //     localStorage.setItem("token", res.data.token);
  //     setToken(res.data.token);
  //   }
  //   console.log(token)
  //   return updatedUser;
  // };

  const updateUserProfile = async (formData: any) => {
  try {
    if (!user || !user._id) {
      throw new Error("Cannot update profile: User ID is missing");
    }

    if (!token) {
      throw new Error("Authentication token missing. Please login again.");
    }

    const res = await axios.put(
      `http://localhost:5000/api/users/updateUser/${user._id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const updatedUser = res.data?.updatedUser;

    if (!updatedUser) {
      throw new Error("Failed to update profile: No user returned from server");
    }

    // update user state
    setUser(updatedUser);

    // update token if backend returns new token
    if (res.data?.token) {
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
    }

    return updatedUser;
  } catch (error: any) {
    console.error("Update error:", error);

    throw new Error(
      error?.response?.data?.message ||
        error?.message ||
        "Failed to update user profile"
    );
  }
};


  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        setUser,
        login,
        register,
        updateUserProfile,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
