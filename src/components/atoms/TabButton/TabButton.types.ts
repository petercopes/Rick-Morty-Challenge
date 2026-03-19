import { TAB_NAME } from '@/util/data';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  onClick: () => void;
  isActive: boolean; 
  tabName:  TAB_NAME;
};

