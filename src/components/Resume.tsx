import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/hosted-assets/Conrad-Miller-Resume.pdf', { replace: true });
    });
    return <div>Please wait to be redirected</div>;
};

export default Resume;
