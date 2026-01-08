import React from 'react';

const LinkedInBadge = () => {
  return (
    <div className="bg-[#1D2226] rounded-lg p-4 w-full max-w-[280px] font-sans">
      {/* LinkedIn Header */}
      <div className="mb-4">
        <span className="text-white text-xl font-semibold">Linked</span>
        <span className="text-[#0A66C2] text-xl font-semibold bg-white px-0.5 rounded-sm">in</span>
      </div>

      {/* Profile Photo */}
      <div className="mb-3">
        <img 
          src="https://media.licdn.com/dms/image/v2/D5603AQHzRc2WOZpfOQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1719conversionRate9070287?e=1741219200&v=beta&t=example"
          alt="Gerard Angelo Garcia"
          className="w-14 h-14 rounded-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div 
          className="w-14 h-14 rounded-full bg-[#0A66C2] items-center justify-center text-white text-xl font-bold hidden"
        >
          GA
        </div>
      </div>

      {/* Name */}
      <h3 className="text-white text-lg font-semibold mb-1">Gerard Angelo Garcia</h3>

      {/* Title */}
      <p className="text-[#B0B0B0] text-sm leading-snug mb-2">
        AI Agent Architect | C++, Java, JS, Python | Specialized in Autonomous Multi-Agent Workflows & Local LLM Orchestration
      </p>

      {/* University */}
      <p className="text-[#B0B0B0] text-sm mb-4">Rizal Technological University</p>

      {/* View Profile Button */}
      <a 
        href="https://www.linkedin.com/in/garciashunko"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-white text-white text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-white/10 transition-colors"
      >
        View profile
      </a>
    </div>
  );
};

export default LinkedInBadge;
