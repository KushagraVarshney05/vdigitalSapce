import React, { useEffect, useMemo, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { ChevronsUpDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const CACHE_KEY = 'countryCodesV1';
const CACHE_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 days

// Fallback hardcoded list if API fails
const FALLBACK_CODES = [
    { code: '+1', country: 'United States/Canada', label: 'United States/Canada (+1)' },
    { code: '+44', country: 'United Kingdom', label: 'United Kingdom (+44)' },
    { code: '+61', country: 'Australia', label: 'Australia (+61)' },
    { code: '+81', country: 'Japan', label: 'Japan (+81)' },
    { code: '+82', country: 'South Korea', label: 'South Korea (+82)' },
    { code: '+86', country: 'China', label: 'China (+86)' },
    { code: '+91', country: 'India', label: 'India (+91)' },
    { code: '+92', country: 'Pakistan', label: 'Pakistan (+92)' },
    { code: '+971', country: 'United Arab Emirates', label: 'United Arab Emirates (+971)' },
    { code: '+49', country: 'Germany', label: 'Germany (+49)' },
    { code: '+33', country: 'France', label: 'France (+33)' },
    { code: '+39', country: 'Italy', label: 'Italy (+39)' },
    { code: '+34', country: 'Spain', label: 'Spain (+34)' },
    { code: '+7', country: 'Russia', label: 'Russia (+7)' },
    { code: '+55', country: 'Brazil', label: 'Brazil (+55)' },
    { code: '+27', country: 'South Africa', label: 'South Africa (+27)' },
    { code: '+234', country: 'Nigeria', label: 'Nigeria (+234)' },
    { code: '+20', country: 'Egypt', label: 'Egypt (+20)' },
    { code: '+964', country: 'Iraq', label: 'Iraq (+964)' },
    { code: '+880', country: 'Bangladesh', label: 'Bangladesh (+880)' },
];

async function fetchCountryCodes() {
    const res = await fetch('https://restcountries.com/v3.1/all?fields=name,idd,cca2');
    if (!res.ok) throw new Error('Failed to fetch country codes');
    const data = await res.json();

    const entries = [];
    for (const c of data) {
        const name = c?.name?.common;
        const idd = c?.idd;
        if (!name || !idd || !idd.root) continue;
        const root = idd.root;
        const suffixes = Array.isArray(idd.suffixes) && idd.suffixes.length > 0 ? idd.suffixes : [''];
        for (const s of suffixes) {
            const code = `${root}${s}`;
            if (code && code.trim()) {
                entries.push({ code, country: name, label: `${name} (${code})` });
            }
        }
    }
    // Deduplicate by label
    const seen = new Set();
    const unique = entries.filter(e => {
        if (seen.has(e.label)) return false; seen.add(e.label); return true;
    });

    unique.sort((a, b) => a.country.localeCompare(b.country));
    return unique;
}

export default function CountryCodeSelect({ value, onChange, placeholder = 'Select country code' }) {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;
        async function load() {
            try {
                setLoading(true);
                const now = Date.now();
                const cached = localStorage.getItem(CACHE_KEY);
                if (cached) {
                    const parsed = JSON.parse(cached);
                    if (parsed.expires > now) {
                        if (!cancelled) setItems(parsed.items);
                        setLoading(false);
                        return;
                    }
                }
                const fetched = await fetchCountryCodes();
                const finalItems = fetched && fetched.length ? fetched : FALLBACK_CODES;
                if (!cancelled) setItems(finalItems);
                // Cache only if we got a real fetch result; still cache fallback to avoid refetching
                localStorage.setItem(CACHE_KEY, JSON.stringify({ items: finalItems, expires: now + CACHE_TTL_MS }));
            } catch (e) {
                setError(e);
                // Use fallback on error
                if (!cancelled) setItems(FALLBACK_CODES);
            } finally {
                if (!cancelled) setLoading(false);
            }
        }
        load();
        return () => { cancelled = true; };
    }, []);

    const selectedLabel = useMemo(() => {
        if (!value) return '';
        const found = items.find(i => i.code === value);
        return found ? found.label : value;
    }, [value, items]);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    {selectedLabel || placeholder}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                <Command>
                    <CommandInput placeholder="Search country or code..." />
                    <CommandList>
                        <CommandEmpty>{loading ? 'Loading...' : error ? 'Failed to load' : 'No results found.'}</CommandEmpty>
                        {!loading && !error && (
                            <CommandGroup>
                                {items.map((item) => (
                                    <CommandItem
                                        key={item.label}
                                        value={item.label}
                                        onSelect={() => {
                                            onChange?.(item.code);
                                            setOpen(false);
                                        }}
                                        className="flex items-center justify-between"
                                    >
                                        <span>{item.label}</span>
                                        <Check className={cn('h-4 w-4', value === item.code ? 'opacity-100' : 'opacity-0')} />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
