import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Map, Users, Layers, UserCheck, LogOut, Shield, ClipboardList } from 'lucide-react';

const Sidebar = ({ userRole, onLogout }) => {
    const navItems = [
        { name: 'Dashboard', path: '/', icon: LayoutDashboard, roles: ['MLA', 'CLUSTER_INCHARGE', 'WARD_INCHARGE', 'UNIT_INCHARGE', 'BOOTH_AGENT'] },
        { name: 'Cluster Incharge', path: '/clusters', icon: Map, roles: ['MLA'] },
        { name: 'Ward Incharge', path: '/wards', icon: Users, roles: ['MLA', 'CLUSTER_INCHARGE'] },
        { name: 'Unit Incharge', path: '/units', icon: Layers, roles: ['MLA', 'CLUSTER_INCHARGE', 'WARD_INCHARGE'] },
        { name: 'Booth Agents', path: '/agents', icon: UserCheck, roles: ['MLA', 'CLUSTER_INCHARGE', 'WARD_INCHARGE', 'UNIT_INCHARGE', 'BOOTH_AGENT'] },
        { name: 'Voter List', path: '/voters', icon: UserCheck, roles: ['MLA', 'CLUSTER_INCHARGE', 'WARD_INCHARGE', 'UNIT_INCHARGE', 'BOOTH_AGENT'] },
        { name: 'Voter Survey', path: '/survey', icon: ClipboardList, roles: ['MLA', 'CLUSTER_INCHARGE', 'WARD_INCHARGE', 'UNIT_INCHARGE', 'BOOTH_AGENT'] },
    ];

    const filteredItems = navItems.filter(item => item.roles.includes(userRole));

    return (
        <>
            {/* Mobile Top Header */}
            <div className="md:hidden fixed top-0 left-0 w-full h-14 glass z-40 border-b border-white/5 flex items-center gap-3 px-4">
                 <div className="p-1.5 bg-indigo-600 rounded-md">
                    <Shield className="text-white" size={18} />
                </div>
                <h1 className="text-lg font-black tracking-tighter text-white">DIGITAL V</h1>
            </div>

            {/* Sidebar / Bottom Nav */}
            <aside className="fixed bottom-0 md:top-0 left-0 w-full md:w-24 lg:w-72 h-16 md:h-screen glass m-0 rounded-none border-t md:border-t-0 md:border-r border-white/5 flex flex-row md:flex-col p-1 md:p-4 lg:p-6 z-50 overflow-x-auto md:overflow-visible no-scrollbar">
                
                <div className="hidden md:flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-start gap-3 mb-8 lg:mb-12 px-0 lg:px-2">
                    <div className="p-2 bg-indigo-600 rounded-lg">
                        <Shield className="text-white" size={24} />
                    </div>
                    <h1 className="text-2xl font-black tracking-tighter text-white hidden lg:block">DIGITAL V</h1>
                </div>

                <nav className="flex-1 flex flex-row md:flex-col items-center md:items-stretch gap-1 md:space-y-2 justify-start w-full px-2 md:px-0">
                    {filteredItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) => `
                                flex flex-col md:flex-row items-center justify-center lg:justify-start gap-1 md:gap-3 px-3 md:px-0 lg:px-4 py-2 md:py-3.5 rounded-xl transition-all duration-300 flex-shrink-0 min-w-[70px] md:min-w-0
                                ${isActive ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'text-slate-400 hover:bg-white/5 hover:text-white'}
                            `}
                        >
                            <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                            <span className="font-bold tracking-tight text-[10px] md:text-[10px] lg:text-sm md:hidden lg:block whitespace-nowrap">{item.name}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="mt-0 md:mt-auto md:border-t border-white/10 md:pt-6 flex flex-row md:flex-col items-center">
                    <button
                        onClick={onLogout}
                        className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-1 md:gap-3 px-4 py-2 md:py-3.5 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-500 transition-all font-bold w-full h-full md:h-auto flex-shrink-0"
                    >
                        <LogOut className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="text-[10px] md:hidden lg:block lg:text-sm whitespace-nowrap">Logout</span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
