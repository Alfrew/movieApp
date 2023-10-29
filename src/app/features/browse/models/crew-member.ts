export interface CrewMember {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: 0 | 1 | 2;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}
