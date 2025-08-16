import type { Route } from "./+types/home";
import Navbar from '~/components/Navbar';
import {resumes} from "../../constants";
import {callback} from "fdir/dist/api/async";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from '~/lib/puter';
import { type NavigateFunction, useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart Feedback for your dream job!" },
  ];
}

export default function Home() {
    const {  auth } = usePuterStore();
    const navigate : NavigateFunction = useNavigate();

    useEffect(() => {
      if (!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated]);


  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>

    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review Your submissions and check AI-powered feedback.</h2>
      </div>
    </section>



    {resumes.length > 0 && (
    <div className="resumes-section">
      {resumes.map((resume, index) => (
          <ResumeCard key={resume.id} resume={resume} />
    ))}
    </div>
    )}

  </main>
}
